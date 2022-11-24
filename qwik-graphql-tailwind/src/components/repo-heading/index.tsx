import { component$ } from '@builder.io/qwik';
import { RepoIcon } from '../icons/repo.icon';

interface RepoHeadingProps {
  name: string;
  owner: string;
}

export const RepoHeading = component$(({ name, owner }: RepoHeadingProps) => {
  const profile_url = `/${owner}`;
  const repo_url = `/${owner}/${name}`;
  return (
    <h1 className="flex items-center text-xl leading-7">
      <RepoIcon className="w-6 h-6 text-gray-600" />
      <span className="text-[#2563EB] inline-block ml-2.5 mb-0.5">
        <a href={profile_url} className="hover:underline">
          {owner}
        </a>
        <span className="text-black ml-1.5">/</span>
        <a href={repo_url} className="font-semibold ml-1.5 hover:underline">
          {name}
        </a>
      </span>
    </h1>
  );
});
