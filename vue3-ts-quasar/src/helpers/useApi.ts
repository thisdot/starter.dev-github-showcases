import axios, {
  AxiosResponse,
  AxiosRequestHeaders,
  AxiosRequestConfig,
} from 'axios';
import { EnvironmentConfig } from '../config';

interface UseApi {
  getRequest: <T>(
    url: string,
    additionalConfig: AxiosRequestConfig<unknown>,
  ) => Promise<T>;

  postRequest: <T>(
    url: string,
    requestData: Record<string, unknown> | null,
    additionalConfig: AxiosRequestConfig<unknown>,
  ) => Promise<T>;
}

export const useApi = (
  baseUrl = EnvironmentConfig.API_URL,
  additionalHeaders: AxiosRequestHeaders = {},
): UseApi => {
  axios.defaults.baseURL = baseUrl;

  // #region UNAUTHENTICATED REQUESTS
  /** Make a standard unauthenticated get request
   * @param {String} url The url the API request should be sent to
   * @param {Object} additionalConfig Any additional config to be passed as part of the API request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const getRequest = async <T = Record<string, unknown> | null>(
    url: string,
    additionalConfig: AxiosRequestConfig<unknown> = {},
  ) => {
    const response: AxiosResponse<T> = await axios.get(url, {
      ...additionalConfig,
      headers: additionalHeaders,
    });

    return response.data;
  };

  /** Make a standard unauthenticated post request
   * @param {String} url The url the API request should be sent to
   * @param {Object} additionalConfig Any additional config to be passed as part of the API request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const postRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestData = {},
    additionalConfig: AxiosRequestConfig<unknown> = {},
  ) => {
    const response: AxiosResponse<T> = await axios.post(url, requestData, {
      ...additionalConfig,
      headers: additionalHeaders,
    });

    return response.data;
  };

  return {
    getRequest,
    postRequest,
  };
};
