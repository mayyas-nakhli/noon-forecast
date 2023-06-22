import { AxiosError } from 'axios';

export default function handleApiError(error: AxiosError) {
  console.log(error.message);
}
