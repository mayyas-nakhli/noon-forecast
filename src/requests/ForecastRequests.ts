import { AxiosError } from 'axios';
import { apiEndpoints } from '../data';
import { ForecastResponse, forecastResponseSchema } from '../schemas';
import { apiClient } from '../services';
import handleApiError from '../services/handle-api-error';
import handleApiResponse from '../services/handle-api-response';

const getForecast = (query: string): Promise<ForecastResponse> =>
  apiClient
    .get<ForecastResponse>(`${apiEndpoints.forecast}?q=${query}&days=8`)
    .then((res) => handleApiResponse(forecastResponseSchema, res)) 
    .catch((error: AxiosError) => {
      handleApiError(error);
      throw error;
    });

export const GetForecastQuery = (query:string) => ({
  queryKey: [`forecast-${query}`],
  queryFn: () => getForecast(query),
  refetchOnMount: false,
  refetchOnWindowFocus: false,
});
