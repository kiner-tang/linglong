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
  normalizeUri, optionalParams,
  upperCamelize,
} from '@/utils/index.ts';
import { File, TSInterfaceBody, TSTypeElement } from '@babel/types';

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
      identifier(propKey),
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
      identifier(item.name),
      tsTypeAnnotation(tsTypeReference(identifier(upperCamelize(createStructName(item.name))))),
    );

    addComment(node, 'leading', item?.description || createStructName(item.name) || '', true);

    return node;
  }
  if (item.type) {
    const node = tsPropertySignature(
      identifier(item.name),
      getTsTypeBySwaggerType(item.type),
    );
    addComment(node, 'leading', optionalParams(item?.description || item?.name || '', item.required), true);
    return node;
  }
  return tsPropertySignature(
    identifier(createStructName(item.name)),
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

  const mainInterfaceName = upperCamelize(`${createStructName(`${normalizeUriStr}Request`)}`);

  const exportModule = createInterface({
    name: mainInterfaceName,
    body: createRequestInterfaceBodyByParams(params, ast),
  });

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
    };
  });
  delete mainParams.test;
  addComment(exportModule, 'leading', addCommentBlock({
    name: mainInterfaceName,
    desc: apiStruct.summary || '',
    params: mainParams || {},
  }));

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

}

export function modelCompiler(data: SwaggerStruct): File[] {
  const asts: File[] = [];

  Object.keys(data.paths).forEach((uri: string) => {
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
