import { modelDir } from '@/config/index.ts';
import {
  BaseDepDataStruct,
  ApiStruct,
  DefinitionsItemStruct,
  RequestParamStruct,
  SchemaTypeStruct,
  SwaggerStruct, ResponseBodyStruct,
} from '@/inner/swagger.ts';

import { createInterface, getStrTypeBySwaggerType, getTsTypeBySwaggerType } from '@/utils/astHelper.ts';
import {
  addCommentBlock,
  CommentParamsOptionStruct,
  createBaseAst, createStructName,
  getBaseApiFromApiPath,
  normalizeUri, optionalParams, optionalType,
  upperCamelize,
} from '@/utils/index.ts';
import {
  File, TSInterfaceBody, tsOptionalType, TSTypeElement,
} from '@babel/types';

const {
  tsInterfaceBody,
  tsPropertySignature,
  tsTypeReference,
  identifier,
  addComment,
  tsTypeAnnotation,
} = require('@babel/types');

/**
 * 创建依赖对象的结构体（包含对象的每个属性的描述）
 * @param {DefinitionsItemStruct} dep 依赖对象
 * @param {File} ast 抽象语法树
 */
function createObjectInterface(dep: DefinitionsItemStruct, ast: File): TSInterfaceBody {
  if (!dep || !dep?.properties) {
    return tsInterfaceBody([]);
  }
  const propKeys = Object.keys(dep.properties || {});
  return tsInterfaceBody(propKeys.map((propKey: string) => {
    const prop = dep!.properties![propKey];
    const node = tsPropertySignature(
      identifier(optionalType(propKey, prop.required)),
      getTsTypeBySwaggerType(prop?.type, prop?.format),
    );
    addComment(node, 'leading', prop?.description || prop?.title || '', true);
    return node;
  }));
}

function createInterfaceBodyItem<T extends BaseDepDataStruct>(item: T, ast: File): TSTypeElement {
  if (item.schema) {
    if (item.dep) {
      const dep = createInterface({
        name: upperCamelize(`${createStructName(item.name)}`),
        body: createObjectInterface(item.dep as DefinitionsItemStruct, ast),
      });

      const commentParams: CommentParamsOptionStruct = {
        test: {
          title: '',
          type: SchemaTypeStruct.object,
        },
      };

      if (item.dep) {
        const props = (item!.dep as DefinitionsItemStruct)!.properties || {};
        const keys = Object.keys(props);
        keys.forEach((key: string) => {
          const prop = props[key];
          commentParams[key] = {
            title: prop.description,
            description: prop.description,
            type: getStrTypeBySwaggerType(prop.type),
            required: prop.required,
          };
        });
      }

      delete commentParams.test;
      addComment(dep, 'leading', addCommentBlock({
        name: item.name,
        desc: item.description || '',
        params: commentParams,
      }));
      ast.program.body.push(dep);
    }
    const node = tsPropertySignature(
      identifier(optionalType(item.name, item.required)),
      tsTypeAnnotation(tsTypeReference(identifier(upperCamelize(createStructName(item.name))))),
    );

    addComment(node, 'leading', item?.description || createStructName(item.name) || '', true);

    return node;
  }
  if (item.type) {
    const node = tsPropertySignature(
      identifier(optionalType(item.name, item.required)),
      getTsTypeBySwaggerType(item.type, item.format),
    );
    addComment(node, 'leading', optionalParams(item?.description || item?.name || '', item.required), true);
    return node;
  }
  return tsPropertySignature(
    identifier(createStructName(optionalType(item.name, item.required))),
    getTsTypeBySwaggerType(SchemaTypeStruct.object),
  );
}

/**
 * 根据参数列表创建interface body
 * @param {RequestParamStruct[]} params  参数列表
 * @param {File} ast     抽象语法树
 */
function createRequestInterfaceBodyByParams(
  params: RequestParamStruct[],
  ast: File,
): TSInterfaceBody {
  return tsInterfaceBody(
    params.map<TSTypeElement>(
      (item: RequestParamStruct) => createInterfaceBodyItem<RequestParamStruct>(item, ast),
    ),
  );
}
/**
 * 根据response创建interface body
 * @param {ResponseBodyStruct} params  响应参数结构
 * @param {File} ast     抽象语法树
 */
function createResponseInterfaceBodyByParams(
  params: ResponseBodyStruct,
  ast: File,
): TSInterfaceBody {
  return tsInterfaceBody(
    [createInterfaceBodyItem<ResponseBodyStruct>(params, ast)],
  );
}

/**
 * 编译请求参数结构
 * @param uri
 * @param data
 * @param ast
 * @param curModel
 */
function compileRequestParamsStruct(
  uri: string,
  data: SwaggerStruct,
  ast: File,
  curModel: ApiStruct,
): void {
  const key = Object.keys(curModel)[0];
  const apiStruct = curModel[key];
  const params = apiStruct.parameters;
  const normalizeUriStr = normalizeUri(uri);

  if (!params) {
    return;
  }
  // 生成一个请求参数Interface名称
  const mainInterfaceName = upperCamelize(`${createStructName(`${normalizeUriStr}Request`)}`);

  // 创建一个到处模块
  const exportModule = createInterface({
    name: mainInterfaceName,
    body: createRequestInterfaceBodyByParams(params, ast),
  });

  // 辅助用于生成代码注释的对象
  const mainParams: CommentParamsOptionStruct = {
    test: {
      title: '',
      type: SchemaTypeStruct.string,
    },
  };
  params.forEach((item: RequestParamStruct) => {
    let type: any;
    if (item.schema) {
      type = upperCamelize(`${createStructName(item.name)}`);
    } else {
      type = `${item.type}${item.format ? `<${item.format}>` : ''}`;
    }
    mainParams[item.name] = {
      title: item.name,
      type,
      description: item.description,
      required: item.required,
    };
  });
  delete mainParams.test;
  // 在interface上添加代码注释
  addComment(exportModule, 'leading', addCommentBlock({
    name: mainInterfaceName,
    desc: apiStruct.summary || '',
    params: mainParams || {},
  }));

  // 将模块代码加入到抽象语法树program的body中
  ast.program.body.push(exportModule);
}

/**
 * 编译响应数据结构
 * @param uri
 * @param data
 * @param ast
 * @param curModel
 */
function compileResponseDataStruct(
  uri: string,
  data: SwaggerStruct,
  ast: File,
  curModel: ApiStruct,
): void {
  // TODO 对响应返回数据的编译解析
}

// 编译主入口
export function modelCompiler(data: SwaggerStruct): File[] {
  const asts: File[] = [];

  Object.keys(data.paths || {}).forEach((uri: string) => {
    const baseApi: string = getBaseApiFromApiPath(uri);
    const curModel: ApiStruct = data.paths[uri];
    const ast = createBaseAst();
    compileRequestParamsStruct(uri, data, ast, curModel);
    compileResponseDataStruct(uri, data, ast, curModel);
    ast.extra = {
      fileName: `${modelDir}/${upperCamelize(`model-${baseApi}`)}`,
      swaggerData: data,
    };
    asts.push(ast);
  });

  // fs.writeFileSync(path.resolve(__dirname, 'swagger-ui.json'), JSON.stringify(data, null, 4));

  return asts;
}
