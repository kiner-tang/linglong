import {
  ApiStruct,
  DefinitionsItemStruct,
  RequestParamStruct,
  ResponseBodyStruct,
  ResponseStruct,
  SwaggerStruct,
} from '@/inner/swagger.ts';
import { resolveSwaggerRef } from '@/utils/index.ts';

const fs = require('fs-extra');

export function resolveRequired(def: DefinitionsItemStruct): void {
  (def?.required || []).forEach((key: string) => {
    const prop = def?.properties?.[key];
    if (prop) {
      prop.required = true;
    }
  });
  // console.log('---->', def);
}

export function resolveResponse(
  sourceData: SwaggerStruct,
  data: ResponseBodyStruct,
  name: string,
): void {
  data.dep = resolveSwaggerRef(sourceData, data?.schema?.$ref);
  // console.log(data.dep);
  data!.dep!.name = name;
  resolveRequired(data.dep as DefinitionsItemStruct);
}

export function transformData(data: SwaggerStruct): void {
  const paths = Object.keys(data.paths);
  paths.forEach((path: string) => {
    const api: ApiStruct = data.paths[path];
    const methods = Object.keys(api);
    methods.forEach((method: string) => {
      const def = api[method];
      const params = def.parameters || [];
      const response: ResponseStruct = def.responses;
      params.forEach((param: RequestParamStruct) => {
        // 存在描述对象时，将描述对象加载过来，方便后续操作
        if (param.schema) {
          // 根据依赖关系获取依赖对象
          param.dep = resolveSwaggerRef(data, param.schema.$ref);
          if (param.dep) {
            Object.keys(param.dep).forEach((key: string) => {
              (param.dep as DefinitionsItemStruct).name = key;
            });
          }
          resolveRequired(param.dep as DefinitionsItemStruct);
        }
      });
      Object.keys(response).filter((key: string) => key === '200').forEach((key: string) => {
        const responseItem: ResponseBodyStruct = response[key];
        resolveResponse(data, responseItem, key);
      });
    });
  });
}

export function JSONParser(data: SwaggerStruct): SwaggerStruct {
  transformData(data);
  fs.writeFileSync('resolve-swagger.json', JSON.stringify(data, null, 4));
  return data;
}
