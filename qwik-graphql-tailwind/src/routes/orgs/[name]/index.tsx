import { component$, useClientEffect$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { OrgProfileCard } from './org-profile-card';

export default component$(() => {
  useClientEffect$(async () => {
    // const abortController = new AbortController();
    // const response = await fetchUserProfile(location.params.user, abortController);
    //updateUserProfile(store, response);
  });

  return (
    <div>
      <OrgProfileCard />
    </div>
  );
});
