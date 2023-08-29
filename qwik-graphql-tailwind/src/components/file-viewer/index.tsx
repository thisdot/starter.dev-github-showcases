import { component$, useClientEffect$, useStore, useContext } from '@builder.io/qwik';
import { REPO_FILE_QUERY } from '~/utils/queries/file-query';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { useQuery } from '~/utils';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '~/utils/constants';
import { mapExtensionToLanguage } from './mapExtensionToLanguage';
import { FileViewerView } from './view';
import { useLocation } from '@builder.io/qwik-city';
import { BranchNavigation } from '../branch-navigation';

interface FileQueryParams {
  owner: string;
  name: string;
  expression: string;
}

interface FileStore {
  text: any;
  error?: any;
  lines: number;
  byteSize: number;
  isLoading: boolean;
}

export const FileViewer = component$(() => {
  const globalStore = useContext(RepoContext);
  const { path, name, owner, branch: pathBranch } = useLocation().params;

  const store = useStore<FileStore>({
    text: '',
    lines: 0,
    byteSize: 0,
    isLoading: true,
  });

  useClientEffect$(async () => {
    const abortController = new AbortController();
    const response = await fetchFile(
      {
        owner,
        name,
        expression: `${globalStore.branch || pathBranch}:${path.replace(/\/+$/, '') || ''}`,
      },
      abortController
    );

    updateFile(store, response);
  });

  if (store.isLoading) {
    return <div />;
  }

  const extension = globalStore.path?.split('.').pop();
  const language = mapExtensionToLanguage(extension);

  return (
    <>
      <BranchNavigation />
      <FileViewerView text={store.text} lines={store.lines} language={language} byteSize={store.byteSize} />
    </>
  );
});

export function updateFile(store: FileStore, response: any) {
  const { error, data } = response;
  if (data?.repository) {
    const file = data.repository?.blob;
    store.byteSize = file?.byteSize || 0;
    store.text = file?.text ? file.text : '';
    store.lines = file?.text?.split('\n').length;
  } else {
    store.error = error || 'Repository path not found';
  }
  store.isLoading = false;
}

export async function fetchFile(payload: FileQueryParams, abortController?: AbortController) {
  const { executeQuery$ } = useQuery(REPO_FILE_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    variables: { ...payload },
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
    },
  });

  return await resp.json();
}
