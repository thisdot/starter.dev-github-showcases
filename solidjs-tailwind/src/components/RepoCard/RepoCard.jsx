import { Link } from '@solidjs/router';
import { Show, splitProps } from 'solid-js';
import { StarIcon } from '../Icons';
import RepoMeta from '../RepoMeta/RepoMeta';
import { PrivacyBadge } from '../PrivacyBadge';
import styles from './RepoCard.module.css';

const RepoCard = (props) => {
  const [local] = splitProps(props, [
    'name',
    'description',
    'primaryLanguage',
    'stargazerCount',
    'owner',
    'forkCount',
    'isProfilePage',
    'updatedAt',
    'visibility',
  ]);

  const repoNameWithOwnerLink = () =>
    local.owner?.login ? `/${local.owner.login}/${local.name || ''}` : '';

  const repoNameWithOwner = () =>
    `${!local.isProfilePage ? `${local.owner?.login || ''}/` : ''}${
      local.name || ''
    }`;

  return (
    <div data-testid="repo-item" class={styles.container}>
      <div class={styles.grid}>
        <h3 class="mb-4">
          <Link href={repoNameWithOwnerLink()}>
            <span class={styles.repoName}>{repoNameWithOwner()}</span>
          </Link>
          <PrivacyBadge visibility={local.visibility.toLowerCase()} />
        </h3>
        <Show when={local.description}>
          <div class={styles.description}>{local.description}</div>
        </Show>
        <RepoMeta
          language={local.primaryLanguage?.name}
          languageColor={local.primaryLanguage?.color}
          forkCount={local.forkCount}
          stargazerCount={local.stargazerCount}
          updatedAt={local.updatedAt}
        />
      </div>
      {local.isProfilePage ? (
        <div class={styles.buttonContainer}>
          <button class={styles.button}>
            <StarIcon /> <span class="ml-1">Star</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RepoCard;
