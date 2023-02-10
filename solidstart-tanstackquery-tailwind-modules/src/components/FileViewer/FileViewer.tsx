import { createSignal, createEffect, Switch, Match, Show } from 'solid-js';
import { useParams } from '@solidjs/router';
import styles from './FileViewer.module.css';
import FileCode from './FileCode';
import FileText from './FileText';
import { mapExtensionToLanguage, ExtensionType } from './mapExtensionToLanguage';
import { RepoFile } from '~/types/repo-file-type';
import { createQuery } from '@tanstack/solid-query';
import getRepoFile from '~/services/get-repo-file';
import { LoadingPulseDot } from '../LoadingPulseDot/LoadingPulseDot';

const FileViewer = () => {
  const params = useParams();
  const [resBlob, setResBlob] = createSignal<RepoFile['blob']>({
    byteSize: 0,
    text: ''
  })

  const query = createQuery(() => ['repo-file'], () => getRepoFile({
    owner: params.owner,
    name: params.name,
    expression: `${branch}:${params.path || ''}`,
  }));


  const branch = params.branch;
  const path = params.path;

  createEffect(() => {
    if (query.isSuccess && !query.isLoading && query.data) {
      setResBlob(query.data)
    }
  })


  const extension = path.split('.').pop() as ExtensionType;
  const language = mapExtensionToLanguage(extension);

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
            <Show when={language} fallback={<FileText text={resBlob().text} />}>
              <FileCode text={resBlob().text} language={language} />
            </Show>
          </div>
        </Match>
      </Switch>
    </>
  );
};

export default FileViewer;
