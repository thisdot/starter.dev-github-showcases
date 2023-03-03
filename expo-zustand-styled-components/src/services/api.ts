import { useAuthStore } from '../hooks/stores';
import { GITHUB_GRAPHQL } from '../utils/constants';

export type ApiProps<VariablesType> = {
  query: string | null;
  variables?: VariablesType;
};

const FetchApi = async <VariablesType>({ query, variables }: ApiProps<VariablesType>) => {
  return (
    (await new Promise((resolve, reject) => {
      fetch(`${GITHUB_GRAPHQL}`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${useAuthStore.getState().token}`,
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
