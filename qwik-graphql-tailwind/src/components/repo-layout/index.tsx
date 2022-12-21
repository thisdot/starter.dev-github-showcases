import { component$, Slot } from '@builder.io/qwik';

import { RepoHeader } from '~/components/repo-header';

export const RepoLayout = component$(() => {
  return (
    <>
      <RepoHeader />
      <Slot />
    </>
  );
});
