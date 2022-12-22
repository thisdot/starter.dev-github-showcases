import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { SIGN_IN_URL } from '~/utils/constants';

export default component$(() => {
  return (
    <section class="flex h-screen w-full items-center justify-center bg-black">
      <button
        class="rounded-md border-2 border-zinc-700 px-20 py-2 text-zinc-100 transition-all hover:border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900"
        onClick$={() => {
          window.location.href = SIGN_IN_URL;
        }}
      >
        Sign In with GitHub
      </button>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Authenticate with GitHub',
};
