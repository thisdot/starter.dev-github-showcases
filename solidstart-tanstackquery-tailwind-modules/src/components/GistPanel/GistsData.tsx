import { For, splitProps } from 'solid-js';
import styles from './Gists.module.css';
import GistsWrapper from './GistsWrapper';
import { A } from '@solidjs/router';
interface GistProp {
  url: string;
  name: string;
}
export type GistsDataProps = {
  gists: GistProp[];
};
const GistsData = (props: GistsDataProps) => {
  const [local] = splitProps(props, ['gists']);

  return (
    <GistsWrapper>
      <div class="mt-3">
        {local.gists.length > 0 ? (
          <For each={local.gists}>
            {(gist) => (
              <div class="my-1" data-testid="gist-item">
                <A href={gist.url} class={styles.link} target="_blank">
                  {gist.name}
                </A>
              </div>
            )}
          </For>
        ) : (
          <p class={styles.error}>User does not have any gists</p>
        )}
      </div>
    </GistsWrapper>
  );
};

export default GistsData;
