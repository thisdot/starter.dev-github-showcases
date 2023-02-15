import { createSignal, createEffect, Switch, Match } from 'solid-js';
import { useParams } from '@solidjs/router';
import styles from './FileViewer.module.css';
import FileText from './FileText';

import { RepoFile } from '~/types/repo-file-type';
import { createQuery } from '@tanstack/solid-query';
import getRepoFile from '~/services/get-repo-file';
import { LoadingPulseDot } from '../LoadingPulseDot/LoadingPulseDot';

const FileViewer = () => {
  const params = useParams();
  const [resBlob, setResBlob] = createSignal<RepoFile['blob']>({
    byteSize: 0,
    text: '',
  });

  const query = createQuery(
    () => [`repo-file_${params.path}`],
    () =>
      getRepoFile({
        owner: params.owner,
        name: params.name,
        expression: `${branch}:${params.path || ''}`,
      })
  );

  const branch = params.branch;

  createEffect(() => {
    if (query.isSuccess && !query.isLoading && query.data) {
      setResBlob(query.data);
    }
  });

  return (
    <>
      <Switch>
        <Match when={query.isError}>
          <p>Error</p>
        </Match>
        <Match when={query.isLoading}>
          <LoadingPulseDot />
        </Match>
        <Match when={query.isSuccess && !query.isLoading}>
          <div class={styles.container}>
            <div class={styles.fileHeader}>
              <span
                data-testid="file viewer line count"
                class={styles.fileHeaderLines}
              >
                {resBlob().text?.split('\n').length} lines
              </span>
              <span
                data-testid="file viewer byte size"
                class={styles.fileHeaderBytes}
              >
                {resBlob().byteSize} Bytes
              </span>
            </div>
            <FileText text={resBlob().text} />
          </div>
        </Match>
      </Switch>
    </>
  );
};

export default FileViewer;
