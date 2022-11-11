import { component$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX } from '~/utils/constants';

export default component$(() => {
  const { path } = useLocation().params;

  return (
    <div class="bg-white">
      <div>Hello {path.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.')}!</div>;
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Starter Kit',
};
