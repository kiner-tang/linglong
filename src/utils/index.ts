import { DefinitionsItemStruct, SwaggerStruct } from '@/inner/swagger.ts';
import { File } from '@babel/types';
import parser from '@babel/parser';
import fs from 'fs';

export function getObjType(val: any) {
  return Object.prototype.toString.call(val);
}

export function isFn(val: any) {
  return getObjType(val) === '[object Function]';
}

export const pipeline = <T>(
  val: any, ...fns: Function[]
) => {
  const res: T = fns.reduce((pre, cur) => cur(pre), val);
  return res;
};

export function createBaseAst(tplPath?: string): File {
  let core = '';
  if (tplPath) {
    core = fs.readFileSync(tplPath).toString('utf-8');
  }
  return parser.parse(core, {
    sourceType: 'module',
    plugins: [
      'typescript',
      ['decorators', { decoratorsBeforeExport: true }],
      'classProperties',
      'classPrivateProperties',
    ],
  });
}

export function getBaseApiFromApiPath(path: string): string {
  return path.split('/')[1];
}

/**
 * 识别用-作为分隔符的字符串，如："my-new-component"
 * @type {RegExp}
 */
export const camelizeRE = /-(\w)/g;

/**
 * 用于缓存一个函数，若所给函数已经在缓存中存在，则直接获取缓存中的函数，否则，将目标函数添加到缓存中并返回；
 * @param fn
 * @returns {function(*): *}
 */
export const cached = (fn: (...args: any[]) => any) => {
  const cache = Object.create(null);

  return (name: string): any => {
    const cacheFn = cache[name];
    const res = cacheFn || (cache[name] = fn(name));
    return res;
  };
};

/**
 * 用于将"my-new-component"类型的文本转换成小驼峰形式"myNewComponent"
 * @param str
 * @returns {string | void | *}
 */
export const camelize = cached((str) => str.replace(camelizeRE, (a: string, b: string) => (b ? b.toUpperCase() : '')));

/**
 * 将字符串首字母转成大写
 * @type {function(*): *}
 */
export const capitalize = cached((str) => str.charAt(0).toUpperCase() + str.slice(1));

/**
 * 将以-连接的字符串转化成大驼峰形式
 */
export const upperCamelize = cached((str: string) => capitalize(camelize(str.startsWith('-') ? str : `-${str}`)));

export const normalizeUri = cached((str: string) => str.replace(/[\\/\\.]/g, '-')
  .replace(/\{([^}]*)\}/g, '$1'));

export function resolveRefPaths(ref: string): string[] {
  return ref.substring(2).split('/');
}

export function resolveSwaggerRef(obj: SwaggerStruct, ref: string): DefinitionsItemStruct {
  let target: any = obj;

  const refPaths = resolveRefPaths(ref);
  refPaths.forEach((key: string) => {
    target = target[key];
  });

  return target;
}
