import { sourceDir } from '@/config/index.ts';
import { SwaggerStruct } from '@/inner/swagger.ts';
import { compiler } from '@/main/compiler/compiler.ts';
import { DataSource } from '@/main/datasource/index.ts';
import { dest } from '@/main/fsManager/dest.ts';
import { genCode, GenLangType } from '@/main/generator/genCode.ts';
import { lintFix } from '@/main/lintFix/index.ts';
import { JSONParser } from '@/main/parser/JSONParser.ts';
import { pipeline } from '@/utils/index.ts';
import yargs from 'yargs';
import path from 'path';

const args = yargs(process.argv).argv;

export class Entry {
  public async init() {
    const dataSource = await DataSource(args.ds as string);
    const outputDir = path.resolve(process.cwd(), args.sourceDir as string || sourceDir);
    await pipeline(
      dataSource,
      JSONParser,
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
  }
}

const entry = new Entry();
entry.init();
