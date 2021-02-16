import { SchemaTypeStruct } from '@/inner/swagger.ts';
import {
  TSExpressionWithTypeArguments, TSInterfaceBody, TSTypeAnnotation,
} from '@babel/types';

const {
  tsArrayType, tsInterfaceDeclaration, exportNamedDeclaration, identifier, tsAnyKeyword,
  tsNumberKeyword, tsStringKeyword,
  tsTypeAnnotation,
} = require('@babel/types');

export type CreateInterfaceOptionStruct = {
    name: string,
    extends?: TSExpressionWithTypeArguments[],
    body: TSInterfaceBody
};

export function createInterface(opt: CreateInterfaceOptionStruct) {
  const interfaceDeclaration = tsInterfaceDeclaration(
    identifier(opt.name),
    null,
    opt.extends,
    opt.body,
  );
  return exportNamedDeclaration(interfaceDeclaration);
}

export function getTsTypeBySwaggerType(swaggerType: SchemaTypeStruct): TSTypeAnnotation {
  switch (swaggerType) {
    case SchemaTypeStruct.integer:
    case SchemaTypeStruct.number:
      return tsTypeAnnotation(tsNumberKeyword());
    case SchemaTypeStruct.array:
      return tsTypeAnnotation(tsArrayType(tsAnyKeyword()));
    case SchemaTypeStruct.string:
      return tsTypeAnnotation(tsStringKeyword());
    case SchemaTypeStruct.object:
    default:
      return tsTypeAnnotation(tsAnyKeyword());
  }
}
