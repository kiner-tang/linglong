import { serviceDir } from '@/config/index.ts';
import { SwaggerStruct } from '@/inner/swagger.ts';
import { createBaseAst } from '@/utils/index.ts';
import { File } from '@babel/types';

export function serviceCompiler(data: SwaggerStruct): File[] {
  const ast = createBaseAst();
  // TODO 实现接口请求相关代码的编译
  ast.extra = {
    fileName: `${serviceDir}/service`,
    swaggerData: data,
  };
  return [ast];
}
