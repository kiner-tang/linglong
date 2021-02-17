export interface SwaggerTagStruct {
    // 标签名
    name: string,
    // 标签描述
    description: string
}

export type Methods =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
    | 'purge' | 'PURGE'
    | 'link' | 'LINK'
    | 'unlink' | 'UNLINK';

export type ResponseCode =
    | '200'
    | '400'
    | '401'
    | '403'
    | '404'
    | '500'
    | '501'
    | '502'
    | '503'
    | '504';

export enum SchemaTypeStruct {
    array='array',
    object='object',
    string='string',
    integer='integer',
    number='number',
}

export enum FormatType {
    int32='int32',
    int64='int64',
    float='float',
    double='double',
    dateTime='date-time'
}

export interface BaseDepDataStruct {
    name: string,
    // 响应描述
    description: string,
    schema?: SchemaStruct,
    dep?: DefinitionsItemStruct | any,
    type?: SchemaTypeStruct,
    required?: boolean
}

export type SchemaStruct = {
    type?: SchemaTypeStruct,
    // 用于表示对象描述所在的位置
    $ref?: string
    // 对象描述
    items?: SchemaStruct
};

export interface ResponseBodyStruct extends BaseDepDataStruct{}

export type ResponseStruct = {
    [key: string]: ResponseBodyStruct
};

export type DefinitionsProperties = {
    [key: string]: DefinitionsItemStruct
}
export type DefinitionsPropertyItem = {
    [key: string]: {
        // 数据类型
        type: SchemaTypeStruct,
        // 数据格式，如类型为integer的话，format可能是：int32或int64
        format: FormatType,
        // 必填项key列表
        required: boolean,
        // 对象属性
        properties?: DefinitionsPropertyItem,
        // 标题
        title?: string,
        // 描述
        description?: string,
    }
}

export type DefinitionsItemStruct = {
    // 数据类型
    type: SchemaTypeStruct,
    // 数据格式，如类型为integer的话，format可能是：int32或int64
    format: FormatType,
    // 必填项key列表
    required: string[],
    // 对象属性
    properties?: DefinitionsPropertyItem,
    // 标题
    title?: string,
    // 字段名
    name?: string,
    // 描述
    description?: string,
}

export interface RequestParamStruct extends BaseDepDataStruct{
    // 参数是放在queryString还是放在body
    in: string,
    // 参数名称
    name: string,
    // 是否必传
    required: boolean,
    // 当前接口是否已经过时，不推荐使用
    deprecated: boolean,
    // 数据类型
    type?: SchemaTypeStruct,
    // 数据格式，如类型为integer的话，format可能是：int32或int64
    format?: FormatType,
}

export type ApiStruct = {
    [key: string]: {
        // 当前接口所属的标签列表
        tags: string[],
        // 接口描述
        summary: string,
        // 唯一Id
        operationId: string,
        // Response content type
        produces: string[],
        // 请求的content-type
        consumes: string[],
        // 请求参数
        parameters: RequestParamStruct[],
        // 接口返回结构
        responses: ResponseStruct,
    }
}

export type SwaggerPathStruct = {
    [key: string]: ApiStruct
}

export interface Definitions {
    [key: string]: DefinitionsItemStruct
}

export interface SwaggerStruct {
    // swagger的版本号
    swagger: string,
    // 接口文档的基础信息
    info: {
        // 接口文档的描述
        description: string,
        // 接口文档的版本
        version: string,
        // 接口文档的标题
        title: string,
        // 服务团队域名
        termsOfService: string
    },
    // 当前文档接口请求域名
    host: string,
    // 接口请求基础路径
    basePath: string,
    // 标签列表
    tags: SwaggerTagStruct[],
    // 接口列表
    paths: SwaggerPathStruct,
    // 接口返回对象描述集
    definitions: Definitions
}
