import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]';
import { RepoIcon } from '../icons/repo.icon';

export const RepoHeading = component$(() => {
  const store = useContext(RepoContext);

  if (store.info.isLoading) {
    return <div>Loading...</div>;
  }

  const { name, owner } = store;

  return (
    <h1 className="flex items-center text-xl leading-7">
      <RepoIcon className="w-6 h-6 text-gray-600" />
      <span className="text-[#2563EB] inline-block ml-2.5 mb-0.5">
        <a>{owner}</a>
        <span className="text-black ml-1.5">/</span>
        <a className="font-semibold ml-1.5">{name}</a>
      </span>
    </h1>
  );
});
