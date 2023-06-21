import { AxiosError } from 'axios';
import { apiEndpoints, backendURL } from '../data';
import { ForecastResponse, forecastResponseSchema } from '../schemas';
import { apiClient } from '../services';
import handleApiError from '../services/handle-api-error';
import handleApiResponse from '../services/handle-api-response';
import { QueryObserverOptions } from '@tanstack/react-query';

const getForecast = (query: string): Promise<ForecastResponse> =>
  apiClient
    .get<ForecastResponse>(`${backendURL}${apiEndpoints.forecast}?q=${query}&days=7`)
    .then((res) => handleApiResponse(forecastResponseSchema, res)) 
    .catch((error: AxiosError) => {
      handleApiError(error);
      throw error;
    });

export const GetForecastQuery = (query = 'dubai') => ({
  queryKey: [`forecast-${query}`],
  queryFn: () => getForecast(query),
  refetchOnMount: false,
  refetchOnWindowFocus: false,
});
