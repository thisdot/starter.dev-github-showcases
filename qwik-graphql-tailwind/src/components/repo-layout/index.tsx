import { component$, useContext, Slot } from '@builder.io/qwik';

import { RepoHeader } from '~/components/repo-header';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';

export const RepoLayout = component$(() => {
  const store = useContext(RepoContext);

  if (store.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <RepoHeader />
      <Slot />
    </>
  );
});
