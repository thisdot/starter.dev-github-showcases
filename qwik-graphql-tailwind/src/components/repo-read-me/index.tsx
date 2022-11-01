import { component$, useClientEffect$, useContext } from '@builder.io/qwik';
import { useQuery } from '~/utils/useQuery';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { REPO_README_QUERY } from '~/utils/queries/repo-read-me';
import { RepoContext, SharedState } from '~/routes/[owner]/[name]';

export const RepoReadMe = component$(() => {
  const store = useContext(RepoContext);

  useClientEffect$(async () => {
    const abortController = new AbortController();
    const response = await fetchRepoReadMe(
      {
        owner: store.owner,
        name: store.name,
        expression: store.path ? `HEAD:${store.path}/README.md` : 'HEAD:README.md',
      },
      abortController
    );

    updateRepoReadMe(store, response);
  });

  if (store.readme.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>There will be read me! hid me if not found</div>
      <pre>{store.readme.text}</pre>
    </div>
  );
});

export function updateRepoReadMe(store: SharedState, response: any) {
  const {
    data: { repository },
  } = response;
  if (repository) {
    const readme = repository.readme as Blob;
    store.readme.text = readme?.text ?? undefined;
  } else {
    store.readme.text = undefined;
  }
  store.readme.isLoading = false;
}

export async function fetchRepoReadMe(
  variables: {
    owner: string;
    name: string;
    expression: string;
  },
  abortController?: AbortController
): Promise<any> {
  const { executeQuery$ } = useQuery(REPO_README_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
    variables,
  });

  return await resp.json();
}
