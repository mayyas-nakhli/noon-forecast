import { AxiosError, AxiosResponse } from 'axios';
import { apiEndpoints } from '../data';
import { apiClient } from '../services';
import handleApiResponse from '../services/handle-api-response';
import { SearchResponse, searchResponseSchema } from '../schemas/SearchSchema';
import handleApiError from '../services/handle-api-error';

const getSearchResult = (query: string): Promise<SearchResponse> => {
  console.log(query);
  return apiClient
    .get(`${apiEndpoints.search}?q=${query}`)
    .then((res: AxiosResponse) => handleApiResponse(searchResponseSchema, res))
    .catch((error: AxiosError) => {
      handleApiError(error);
      throw error;
    });
};

export const SearchQuery = (query: string) => ({
  queryKey: [`search-result-${query}`],
  queryFn: () => getSearchResult(query),
  refetchOnMount: true,
  refetchOnWindowFocus: false,
  enabled: query.length > 2,
});
