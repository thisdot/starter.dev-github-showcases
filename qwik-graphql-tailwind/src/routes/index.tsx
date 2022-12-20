import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Gists from '../components/gists';
import TopRepos from '../components/top-repos';

export default component$(() => {
  return (
    <div className="flex flex-col-reverse lg:flex-row  min-h-[calc(100vh-70px)]">
      <Gists />
      <div className="basis-3/4">
        <TopRepos />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Starter Kit',
};
