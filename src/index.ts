import { sourceDir } from '@/config/index.ts';
import { compiler } from '@/main/compiler/compiler.ts';
import { DataSource } from '@/main/datasource/index.ts';
import { dest } from '@/main/fsManager/dest.ts';
import { genCode, GenLangType } from '@/main/generator/genCode.ts';
import { lintFix } from '@/main/lintFix/index.ts';
import { parser, ParserType } from '@/main/parser/parser.ts';
import { pipeline } from '@/utils/index.ts';
import { logWithSpinner, stopSpinner } from '@/utils/spinner.ts';
import path from 'path';
import yargs from 'yargs';

const shell = require('shelljs');

const args = yargs(process.argv).argv;

export class Entry {
  public async init() {
    logWithSpinner('Api代码生成中...', '代码已全部生成');
    try {
      const dataSource = await DataSource(args.ds as string, args.mock === 'true');
      const outputDir = path.resolve(process.cwd(), args.sourceDir as string || sourceDir);
      await pipeline(
        dataSource,
        parser(ParserType.swaggerJson),
        compiler({
          baseUrlKey: args.baseUrl as string || 'BASE_URL',
          outputDir,
        }),
        genCode({
          langType: args.targetLang as GenLangType || GenLangType.Typescript,
        }),
        dest(outputDir),
        lintFix(outputDir),
      );
      stopSpinner(true);
      shell.cd(outputDir).exec('tree .');
    } catch (e) {
      stopSpinner();
      throw e;
    }
  }
}

const entry = new Entry();
entry.init();
