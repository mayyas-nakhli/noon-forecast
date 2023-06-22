import { AxiosResponse } from 'axios';
import {ZodSchema} from 'zod';

export default function handleApiResponse(
  schema: ZodSchema,
  data: AxiosResponse,
) {

  if (data.status === 200) {
    return schema.parse(data.data)
  }
  return undefined
}