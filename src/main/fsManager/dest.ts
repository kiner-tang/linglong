import { GenCodeResult } from '@/main/generator/genCode.ts';
import path from 'path';

const fsExtra = require('fs-extra');

export type DestReturnType = (opt: GenCodeResult[]) => Promise<void>;
export function dest(rootDir: string = ''): DestReturnType {
  return async (opts: GenCodeResult[]) => {
    opts.map(
      (opt: GenCodeResult) => {
        const filePath = path.resolve(process.cwd(), rootDir, opt.fileName);
        if (!fsExtra.pathExistsSync(filePath)) {
          fsExtra.mkdirpSync(filePath.substring(0, filePath.lastIndexOf('/')));
        }
        return fsExtra.writeFileSync(
          filePath,
          opt.core,
          {
            encoding: 'utf-8',
          },
        );
      },
    );
  };
}
