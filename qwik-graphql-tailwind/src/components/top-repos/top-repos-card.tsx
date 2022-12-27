import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import type { TopRepo } from './types';

import { RepoCard } from '~/components/repo-card/repo-card';

interface UserTopReposViewProps {
  login: string;
  repos: TopRepo[];
}
export default component$(({ repos, login }: UserTopReposViewProps) => {
  if (repos.length === 0) {
    return <div>No repositories found</div>;
  }

  return (
    <div class="w-full border rounded-lg relative bg-white">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
      <div class="bg-gray-50 p-5 w-full text-center">
        <Link href={`/${login}`} class="font-semibold text-gray-600 hover:text-blue-500">
          View all repositories
        </Link>
      </div>
    </div>
  );
});
