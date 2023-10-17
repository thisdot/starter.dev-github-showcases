export type ApiProps = {
  url: string;
  headersOptions: Record<string, string>;
};

const FetchApi = async ({
  url,
  headersOptions,
}: ApiProps): Promise<Record<string, any>> => {
  return (
    (await new Promise((resolve, reject) => {
      const fetchObj: {
        headers: Record<string, string>;
      } = {
        headers: {
          ...headersOptions,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
      };
      fetch(url, fetchObj)
        .then((res) => res.json())
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    })) || null
  );
};

export default FetchApi;
