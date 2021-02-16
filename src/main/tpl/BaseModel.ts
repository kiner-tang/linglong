export interface BaseModelOptionStruct {
    method: | 'get' | 'GET'
        | 'delete' | 'DELETE'
        | 'head' | 'HEAD'
        | 'options' | 'OPTIONS'
        | 'post' | 'POST'
        | 'put' | 'PUT'
        | 'patch' | 'PATCH'
        | 'purge' | 'PURGE'
        | 'link' | 'LINK'
        | 'unlink' | 'UNLINK'
    data: Record<string, any>,
    header: Record<string, any>,
    withCredentials: boolean
}

export class BaseModel {
    private baseUrl: string = '__BASE_URL_PLACEHOLDER__';

    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }

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
