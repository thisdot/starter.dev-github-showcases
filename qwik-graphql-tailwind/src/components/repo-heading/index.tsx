import { component$ } from '@builder.io/qwik';
import { RepoIcon } from '../icons/repo.icon';
import { Link } from '@builder.io/qwik-city';

export const RepoHeading = component$(({ owner, name }: { owner: string; name: string }) => {
  const profile_url = `/${owner}`;
  const repo_url = `/${owner}/${name}`;
  return (
    <h1 class="flex items-center text-xl leading-7">
      <RepoIcon className="w-6 h-6 text-gray-600" />
      <span class="text-[#2563EB] inline-block ml-2.5 mb-0.5">
        <Link href={profile_url} class="hover:underline">
          {owner}
        </Link>
        <span class="text-black ml-1.5">/</span>
        <Link href={repo_url} class="font-semibold ml-1.5 hover:underline">
          {name}
        </Link>
      </span>
    </h1>
  );
});
