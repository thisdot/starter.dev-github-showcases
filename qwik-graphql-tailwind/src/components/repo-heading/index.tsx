import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { RepoIcon } from '../icons/repo.icon';

export const RepoHeading = component$(() => {
  const store = useContext(RepoContext);

  const profile_url = `/${store.owner}`;
  const repo_url = `/${store.owner}/${store.name}`;
  return (
    <h1 class="flex items-center text-xl leading-7">
      <RepoIcon className="w-6 h-6 text-gray-600" />
      <span class="text-[#2563EB] inline-block ml-2.5 mb-0.5">
        <a href={profile_url} class="hover:underline">
          {store.owner}
        </a>
        <span class="text-black ml-1.5">/</span>
        <a href={repo_url} class="font-semibold ml-1.5 hover:underline">
          {store.name}
        </a>
      </span>
    </h1>
  );
});
