import { For, Match, Show, Switch } from 'solid-js';
import { A, useParams } from '@solidjs/router';
import { GitBranchIcon } from '../Icons';
import styles from './BranchNavigation.module.css';

interface Props {
  branch: string;
}

const BranchNavigation = (props: Props) => {
  const params = useParams();
  const path = params.path || params['path/'];
  const crumbs = () => path?.split('/').filter(Boolean) || [];

  // creates a proper GitHub url path from a repo path
  const hrefPath = (index: number) => {
    const crumbPath = path
      ?.split('/')
      .filter(Boolean)
      .slice(0, index + 1)
      .join('/');
    return `/${params.owner}/${params.name}/tree/${props.branch}/${crumbPath}`;
  };

  return (
    <nav class={styles.container}>
      <button class={styles.btn}>
        <GitBranchIcon class={styles.btnIcon} /> {props.branch}{' '}
        <span class={styles.btnCaret}>{'\u25BC'}</span>
      </button>
      <Show when={crumbs().length > 0}>
        <div class={styles.crumbs}>
          <A
            href={`/${params.owner}/${params.name}`}
            data-testid={`file explorer nav root ${params.name}`}
            class={styles.rootLink}
          >
            {params.name}
          </A>
          <span class={styles.separator}>/</span>
          <For each={crumbs()}>
            {(crumb, index) => (
              <Switch
                fallback={
                  <>
                    <a
                      href={`${hrefPath(index())}`}
                      data-testid={`file explorer nav crumb ${crumb}`}
                      class={styles.crumbLink}
                    >
                      {crumb}
                    </a>
                    <span class={styles.separator}>/</span>
                  </>
                }
              >
                <Match when={index() === crumbs().length - 1}>
                  <span
                    data-testid={`file explorer nav end ${crumb}`}
                    class={styles.crumbEnd}
                  >
                    {crumb}
                  </span>
                </Match>
              </Switch>
            )}
          </For>
        </div>
      </Show>
    </nav>
  );
};

export default BranchNavigation;
