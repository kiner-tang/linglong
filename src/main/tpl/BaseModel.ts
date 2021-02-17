// 请求方法枚举
export type Methods = | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
    | 'purge' | 'PURGE'
    | 'link' | 'LINK'
    | 'unlink' | 'UNLINK';

// 发起请求参数结构
export interface BaseModelOptionStruct {
    method: Methods,
    data: Record<string, any>,
    header: Record<string, any>,
    withCredentials: boolean
}

/**
 * 基础请求类，所有的网络请求都要经过此类发送
 */
export class BaseModel {
    private baseUrl: string = '__BASE_URL_PLACEHOLDER__';

    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }

    /**
     * 基础请求方法
     * @param opt
     */
    send(opt: BaseModelOptionStruct) {

    }

    get(opt: Exclude<BaseModelOptionStruct, 'method'>) {
      return this.send({
        ...opt,
        method: 'get',
      });
    }

    post(opt: Exclude<BaseModelOptionStruct, 'method'>) {
      return this.send({
        ...opt,
        method: 'post',
      });
    }
}
