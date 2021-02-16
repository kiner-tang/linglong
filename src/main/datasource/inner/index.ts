// 获取数据源输入参数
export type DataSourceInputStruct = {
    url: string, // 若使用远程json文件作为数据源，则在这里配置json的url
    data?: string, // 若请求的接口需要额外参数，通过data传输
};

// 获取输入源返回参数结构
export type DataSourceOutputStruct = {};
