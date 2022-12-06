import { component$ } from '@builder.io/qwik';
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
    <div key={id} className={styles.item}>
      <h3 className="mb-2">
        <a href={`/${owner}/${name}`} className={styles.headingLink}>
          {name}
        </a>
        <PrivacyBadge isPrivate={isPrivate} className="relative bottom-0.5" />
      </h3>
      <div className={styles.description}>{description}</div>
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
