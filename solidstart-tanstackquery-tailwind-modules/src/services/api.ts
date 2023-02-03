export type ApiProps = {
  url: string;
  query: string | null;
  variables: Record<string, string|number|null> | null;
  headersOptions: Record<string, string>;
};
const FetchApi = async ({ url, query, variables, headersOptions }: ApiProps) => {
  return await new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        ...headersOptions,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  }) || null;
};

export default FetchApi;