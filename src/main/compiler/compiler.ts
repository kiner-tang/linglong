import { SwaggerStruct } from '@/inner/swagger.ts';
import { baseModelCompiler } from '@/main/compiler/base-model-compiler.ts';
import { modelCompiler } from '@/main/compiler/model-compiler.ts';
import { serviceCompiler } from '@/main/compiler/service-compiler.ts';
import { File } from '@babel/types';

export type CompilerReturnType = (data: SwaggerStruct) => File[];
export type CompilerOption = {
  baseUrlKey: string,
  outputDir?: string
};

export function compiler(opt: CompilerOption): CompilerReturnType {
  return (data: SwaggerStruct) => {
    // 生成基础请求文件，包含基础的请求方法，如axios的封装
    const baseModelAsts = baseModelCompiler(data, opt);
    // 跟据paths和definitions生成model，将接口请求参数和返回结果的interface定义出来
    const modelAsts = modelCompiler(data);
    // 根据paths和已经生成的model生成用于接口请求的service层
    const serviceAsts = serviceCompiler(data);
    // TODO 若项目中使用的store层框架能够统一，也可以根据接口文档，动态生成store层相关的代码

    return [...baseModelAsts, ...modelAsts, ...serviceAsts];
  };
}
