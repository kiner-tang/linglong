import { SwaggerStruct } from '@/inner/swagger.ts';
import { JSONParser } from '@/main/parser/JSONParser.ts';

export enum ParserType {
    swaggerJson='swaggerJson'
}

// parser是一个高阶函数，他接收到数据源类型后，将会根据数据源的类型选择不同的适配器返回，用以处理不同数据源的适配
export type ParserReturnType = (data: any) => SwaggerStruct;

// 根据不同的数据源类型选择不同的适配器进行转换
export function parser(type: ParserType): ParserReturnType {
  switch (type) {
    case ParserType.swaggerJson:
      return (data) => JSONParser(data);
    default:
      return (data) => JSONParser(data);
  }
}
