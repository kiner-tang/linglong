import { FormatType, SchemaTypeStruct } from '@/inner/swagger.ts';
import {
  TSExpressionWithTypeArguments,
  TSInterfaceBody,
  TSTypeAnnotation,
} from '@babel/types';

const {
  tsArrayType, tsInterfaceDeclaration, exportNamedDeclaration, identifier, tsAnyKeyword,
  tsNumberKeyword, tsStringKeyword,
  tsTypeAnnotation, tsBigIntKeyword,
  tsObjectKeyword,
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

export function getTsTypeBySwaggerType(
  swaggerType?: SchemaTypeStruct,
  formType?: FormatType,
): TSTypeAnnotation {
  switch (swaggerType) {
    case SchemaTypeStruct.integer:
    case SchemaTypeStruct.number:
      return tsTypeAnnotation(
        formType === FormatType.int32 ? tsNumberKeyword() : tsBigIntKeyword(),
      );
    case SchemaTypeStruct.array:
      return tsTypeAnnotation(tsArrayType(tsAnyKeyword()));
    case SchemaTypeStruct.string:
      return tsTypeAnnotation(tsStringKeyword());
    case SchemaTypeStruct.object:
    default:
      return tsTypeAnnotation(tsAnyKeyword());
  }
}

export function getStrTypeBySwaggerType(
  swaggerType?: SchemaTypeStruct,
  formType?: FormatType,
): string {
  switch (swaggerType) {
    case SchemaTypeStruct.integer:
    case SchemaTypeStruct.number:
      return formType === FormatType.int32 ? 'number' : 'bigint';
    case SchemaTypeStruct.array:
      return 'array';
    case SchemaTypeStruct.string:
      return 'string';
    case SchemaTypeStruct.object:
    default:
      return 'object';
  }
}
