import { error } from '@sveltejs/kit';

export abstract class AbstractFetchService {
  protected constructor(
    protected fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {}

  /**
   * Makes a request to specified endpoint.
   *
   * ***Note**: Automatically rejects the promise in case of error response.*
   * @param input Endpoint Information
   * @param init Request Init options (optional)
   * @returns Response body as json
   */
  protected async rejectableFetchJson<TJson>(
    input: URL | RequestInfo,
    init?: RequestInit | undefined
  ): Promise<TJson> {
    const response = await this.fetch(input, init);
    if (!response.ok) {
      if (!response.ok) {
        const body = await response.json();
        throw error(response.status, body?.message || response.statusText);
      }
    }
    return response.json();
  }
}
