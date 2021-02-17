import path from 'path';

const shell = require('shelljs');

export type LintFixReturnType = () => void;
export function lintFix(dir: string = path.resolve(process.cwd(), '.')): LintFixReturnType {
  return () => {
    shell.cd(dir).exec(`eslint --fix --ext .js --ext .ts ${dir}`);
  };
}
