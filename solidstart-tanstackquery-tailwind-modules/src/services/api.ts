export type ApiProps<VariablesType> = {
  url: string;
  query?: string | null;
  variables?: VariablesType;
  headersOptions: Record<string, string>;
};

const FetchApi = async <VariablesType>({
  url,
  query,
  variables,
  headersOptions,
}: ApiProps<VariablesType>) => {
  return (
    (await new Promise((resolve, reject) => {
      let fetchObj: {
        headers: Record<string, string>;
        method?: string;
        body?: string;
      } = {
        headers: {
          ...headersOptions,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
      };
      if (query) {
        fetchObj = {
          ...fetchObj,
          method: 'POST',
          body: JSON.stringify({
            query,
            variables,
          }),
        };
      }
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
