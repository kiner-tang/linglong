import { SwaggerStruct } from '@/inner/swagger.ts';
import axios, { AxiosResponse } from 'axios';

export async function DataSource(url: string): Promise<SwaggerStruct> {
  const res: AxiosResponse<SwaggerStruct> = await axios.get<SwaggerStruct>(url);
  return res.data;
}
