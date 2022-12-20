import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Repo, TopRepo } from '~/utils/types';
import { PrivacyBadge } from '../privacy-badge/privacy-badge';
import { RepoMeta } from '../repo-meta/repo-meta';

interface RepoStyles {
  item: string;
  headingLink: string;
  description: string;
}

export interface RepoCardProps {
  repo: Repo | TopRepo;
  styles: RepoStyles;
}

export const RepoCard = component$(({ repo, styles }: RepoCardProps) => {
  const { id, name, owner, description, stargazerCount, forkCount, language, languageColor, updatedAt, isPrivate } =
    repo;

  return (
    <div key={id} class={styles.item}>
      <h3 class="mb-2">
        <Link href={`/${owner}/${name}`} class={styles.headingLink}>
          {name}
        </Link>
        <PrivacyBadge isPrivate={isPrivate} className="relative bottom-0.5" />
      </h3>
      <div class={styles.description}>{description}</div>
      <RepoMeta
        language={language}
        languageColor={languageColor}
        forkCount={forkCount}
        stargazerCount={stargazerCount}
        updatedAt={updatedAt}
      />
    </div>
  );
});
