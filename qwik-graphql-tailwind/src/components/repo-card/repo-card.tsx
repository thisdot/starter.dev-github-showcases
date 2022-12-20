import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Repo, TopRepo } from '~/utils/types';
import { PrivacyBadge } from '../privacy-badge/privacy-badge';
import { RepoMeta } from '../repo-meta/repo-meta';

export interface RepoCardProps {
  repo: Repo | TopRepo;
}

export const RepoCard = component$(({ repo }: RepoCardProps) => {
  const { id, name, owner, description, stargazerCount, forkCount, language, languageColor, updatedAt, isPrivate } =
    repo;

  return (
    <div key={id} className="p-4 border-b">
      <h3 className="mb-2">
        <Link href={`/${owner}/${name}`} className="text-xl text-blue-600 font-semibold hover:underline mr-3">
          {name}
        </Link>
        <PrivacyBadge isPrivate={isPrivate} className="relative bottom-0.5" />
      </h3>
      <div className="text-gray-600 text-sm max-w-prose -mb-1 -mt-1">{description}</div>
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
