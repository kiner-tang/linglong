import { SwaggerStruct } from '@/inner/swagger.ts';
import axios, { AxiosResponse } from 'axios';
// @ts-ignore
// import { mockData } from '@/mock/api-docs.ts';
import { mockData } from '@/mock/example.ts';

export async function DataSource(url: string, mock: boolean = false): Promise<SwaggerStruct> {
  const res: AxiosResponse<SwaggerStruct> = await axios.get<SwaggerStruct>(url);
  // const res: AxiosResponse<SwaggerStruct> = await axios.get<SwaggerStruct>(url);
  return mock ? mockData : res.data;
}
