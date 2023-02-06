export type ApiProps<VariablesType> = {
  url: string;
  query: string | null;
  variables: VariablesType;
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
    })) || null
  );
};

export default FetchApi;
