import { SwaggerStruct } from '@/inner/swagger.ts';
import generate from '@babel/generator';
import { Node } from '@babel/types';

export type GenCodeResult = {
  fileName: string,
  core: string,
  ast: Node,
  swaggerData: SwaggerStruct | null
};

export enum GenLangType {
  Typescript='Typescript',
  Javascript='Javascript',
}

export type GenCodeOptionStruct = {
  langType: GenLangType
};

export type GenCodeReturnType = (asts: Node[]) => GenCodeResult[];

export function getExtNameByLangType(type: GenLangType) {
  return type === GenLangType.Typescript ? '.ts' : '.js';
}

export function genCode(
  opt: GenCodeOptionStruct = { langType: GenLangType.Typescript },
): GenCodeReturnType {
  return (asts: Node[]) => asts.map((ast: Node) => {
    const generateCode = generate(ast, {
      retainLines: false,
      sourceMaps: false,
      decoratorsBeforeExport: true,
      jsescOption: {
        quotes: 'single',
      },
    });
    return ({
      fileName: (ast?.extra?.fileName as string || 'test') + getExtNameByLangType(opt.langType),
      core: generateCode.code,
      ast,
      swaggerData: ast?.extra?.swaggerData as SwaggerStruct || null,
    });
  });
}
