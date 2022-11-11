import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

// Unicode U+2024 ONE DOT LEADER (https://www.compart.com/en/unicode/U+2024)
// We use this character to bypass the dynamic routing issue
export const SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX = /%E2%80%A4/g;

export default component$(() => {
  const { file } = useLocation().params;
  return <div>Hello {file.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.')}!</div>;
});
