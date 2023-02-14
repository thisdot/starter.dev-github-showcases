import { unstable_clientOnly } from 'solid-start';

// Highlight doesn't work with SSR so we need to use unstable_clientOnly
// This causes storybook to not work with this component
const Highlight = unstable_clientOnly(() => import('solid-highlight'));

function FileCode(props: { text: string; language: string | undefined }) {
  return <Highlight language={props.language}>{props.text}</Highlight>;
}

export default FileCode;
