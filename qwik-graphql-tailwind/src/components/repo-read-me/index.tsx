import { component$, useClientEffect$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Markdown } from '~/integrations/react/read-md';
import { useQuery } from '~/utils/useQuery';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { REPO_README_QUERY } from '~/utils/queries/repo-read-me';
import { RepoContext, SharedState } from '~/routes/[owner]/[name]';

import * as styles from './repo-read-me.className';
import { TOCIcon } from '../icons';
import { Empty } from './empty';

export const RepoReadMe = component$(() => {
  const store = useContext(RepoContext);
  const { pathname } = useLocation();

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

  if (store.readme.text) {
    return (
      <div className={styles.container} data-testid="readme">
        <header className={styles.header}>
          <span className={styles.tocIconContainer}>
            <TOCIcon className={styles.tocIcon} />
          </span>
          <span className={styles.filename}>README.md</span>
        </header>
        <article className="prose py-6 px-10 max-w-none prose-headings:font-medium prose-p:my-3 prose-p:leading-6 prose-headings:border-b prose-headings:my-1 prose-headings:pb-2 prose-h1:my-4 prose-h2:my-4 prose-h3:border-none prose-h4:border-none prose-h5:border-none prose-img:inline prose-img:m-0 prose-a:text-blue-600 prose-a:no-underline prose-a:font-normal hover:prose-a:underline prose-li:my-0.5 prose-pre:bg-gray-100  prose-code:text-gray-800 text-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:bg-gray-100">
          <Markdown data={store.readme.text} />
        </article>
      </div>
    );
  }

  if (!pathname.includes('tree')) {
    return <Empty />;
  }

  return null;
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
