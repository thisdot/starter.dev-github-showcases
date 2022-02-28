import axios, {
  AxiosResponse,
  AxiosRequestHeaders,
  AxiosRequestConfig,
} from 'axios';
import { EnvironmentConfig } from '../config';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (
  baseUrl = EnvironmentConfig.API_URL,
  additionalHeaders: AxiosRequestHeaders = {},
) => {
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
  ) => {
    const response: AxiosResponse<T> = await axios.post(url, requestData, {
      headers: additionalHeaders,
    });

    return response.data;
  };

  /** Make a standard unauthenticated patch request
   * @param {String} url The url the API request should be sent to
   * @param {Object} requestData Any data that needs to be passed in as part of the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const patchRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestData = {},
  ) => {
    const response: AxiosResponse<T> = await axios.patch(url, requestData, {
      headers: additionalHeaders,
    });

    return response.data;
  };

  /** Make a standard unauthenticated delete request
   * @param {String} url The url the API request should be se nt to
   * @param {Object} requestParams Any request parameters passed in as part of the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const deleteRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestParams = {},
  ) => {
    const response: AxiosResponse<T> = await axios.delete(url, {
      params: requestParams,
      headers: additionalHeaders,
    });

    return response.data;
  };

  // #endregion UNAUTHENTICATED REQUESTS

  return {
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest,
  };
};
