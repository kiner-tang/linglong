import { modelDir } from '@/config/index.ts';
import { SwaggerStruct } from '@/inner/swagger.ts';
import { CompilerOption } from '@/main/compiler/compiler.ts';
import { createBaseAst } from '@/utils/index.ts';
import { File } from '@babel/types';
import path from 'path';

const fs = require('fs-extra');

const { default: traverse } = require('@babel/traverse');
const { isStringLiteral } = require('@babel/types');

export function baseModelCompiler(data: SwaggerStruct, opt: CompilerOption = { baseUrlKey: 'DEFAULT_BASE_URL' }): File[] {
  if (opt.outputDir) {
    const filePathTs = path.resolve(opt.outputDir, 'BaseModel.ts');
    const filePathJs = path.resolve(opt.outputDir, 'BaseModel.js');

    if (fs.pathExistsSync(filePathJs) || fs.pathExistsSync(filePathTs)) {
      return [];
    }
  }
  // 创建抽象语法树
  const ast = createBaseAst(path.resolve(process.cwd(), 'src/main/tpl/BaseModel.ts'));
  // const {
  //   baseUrlKey,
  // } = opt;

  // fs.writeFileSync('test.log', '');
  // 递归遍历所有的抽象语法树节点，找打要更改的目标节点并修改某个节点的值
  traverse(ast, {
    enter(path: any) {
      // fs.appendFileSync('test.log', `[${path.type}]：${JSON.stringify(path.node, null, 4)}\n\n`);
      if (isStringLiteral(path) && path.node.value === '__BASE_URL_PLACEHOLDER__') {
        path.node.value = `//${data.host}${data.basePath}`;
      }
    },
  });

  // 可以添加一些额外的信息再extra中，辅助我们的代码生成器生成代码
  ast.extra = {
    fileName: `${modelDir}/BaseModel`,
    swaggerData: data,
  };

  // console.log(ast);

  return [ast];
}
