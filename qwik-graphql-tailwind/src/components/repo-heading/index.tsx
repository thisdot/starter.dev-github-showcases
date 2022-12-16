import { component$, useContext } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { RepoIcon } from '../icons/repo.icon';

export const RepoHeading = component$(() => {
  const store = useContext(RepoContext);

  const profile_url = `/${store.owner}`;
  const repo_url = `/${store.owner}/${store.name}`;
  return (
    <h1 className="flex items-center text-xl leading-7">
      <RepoIcon className="w-6 h-6 text-gray-600" />
      <span className="text-[#2563EB] inline-block ml-2.5 mb-0.5">
        <Link href={profile_url} className="hover:underline">
          {store.owner}
        </Link>
        <span className="text-black ml-1.5">/</span>
        <Link href={repo_url} className="font-semibold ml-1.5 hover:underline">
          {store.name}
        </Link>
      </span>
    </h1>
  );
});
