import { SwaggerStruct } from '@/inner/swagger.ts';
import axios, { AxiosResponse } from 'axios';
// @ts-ignore
import { mockData } from '@/mock/api-docs.ts';
// import { mockData } from '@/mock/example.ts';

// 从远程接口文档获取数据源
export async function getDsByRemote(url: string): Promise<SwaggerStruct> {
  const res: AxiosResponse<SwaggerStruct> = await axios.get<SwaggerStruct>(url);
  return res.data;
}

// 从本地文件获取数据源
export async function getDsByLocalFile(): Promise<SwaggerStruct> {
  return mockData;
}

// 简易的数据源收集器
export async function DataSource(url: string, mock: boolean = false): Promise<SwaggerStruct> {
  return mock ? getDsByLocalFile() : getDsByRemote(url);
}
