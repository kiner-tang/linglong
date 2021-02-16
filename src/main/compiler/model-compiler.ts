import { modelDir } from '@/config/index.ts';
import {
  ApiStruct, RequestParamStruct, SchemaTypeStruct, SwaggerStruct,
} from '@/inner/swagger.ts';
import { createInterface, getTsTypeBySwaggerType } from '@/utils/astHelper.ts';
import {
  createBaseAst, getBaseApiFromApiPath, normalizeUri, upperCamelize,
} from '@/utils/index.ts';
import {
  File, tsExpressionWithTypeArguments, TSInterfaceBody, TSTypeElement,
} from '@babel/types';
import fs from 'fs';
import path from 'path';

const {
  tsInterfaceBody,
  tsPropertySignature,
  Identifier,
} = require('@babel/types');

function createInterfaceBodyByParams(params: RequestParamStruct[]): TSInterfaceBody {
  return tsInterfaceBody(params.map<TSTypeElement>((item: RequestParamStruct) => {
    if (item.schema) {
      return tsPropertySignature(
        Identifier(item.name),
        getTsTypeBySwaggerType(SchemaTypeStruct.object),
      );
    } if (item.type) {
      return tsPropertySignature(
        Identifier(item.name),
        getTsTypeBySwaggerType(item.type),
      );
    }
    return tsPropertySignature(
      Identifier(item.name),
      getTsTypeBySwaggerType(SchemaTypeStruct.object),
    );
  }));
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
  const uris = normalizeUri(uri);

  if (!params) {
    return;
  }

  const exportModule = createInterface({
    name: upperCamelize(uris),
    body: createInterfaceBodyByParams(params),
  });

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
