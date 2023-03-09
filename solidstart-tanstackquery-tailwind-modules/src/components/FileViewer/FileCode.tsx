import { unstable_clientOnly } from 'solid-start';
import './FileCode.css';

const Highlight = unstable_clientOnly(() => import('solid-highlight'));

function FileCode(props: { text: string; language: string | undefined }) {
  return <Highlight language={props.language}>{props.text}</Highlight>;
}

export default FileCode;
