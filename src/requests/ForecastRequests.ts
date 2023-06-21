import { AxiosError } from 'axios';
import { apiEndpoints, backendURL } from '../data';
import { ForecastResponse, forecastResponseSchema } from '../schemas';
import { apiClient } from '../services';
import handleApiError from '../services/handle-api-error';
import handleApiResponse from '../services/handle-api-response';

const getForecast = () =>
  apiClient
    .get(`${backendURL}${apiEndpoints.forecast}?q=dubai`)
    .then((res) => res.data)
    .catch((error: AxiosError) => {
      handleApiError(error);
      throw error;
    });

export const GetForecastQuery = () => ({
  queryKey: ['forecast'],
  queryFn: () => getForecast(),
  refetchOnMount: false,
  refetchOnWindowFocus: false,
});
