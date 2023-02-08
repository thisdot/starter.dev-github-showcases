import { JSXElement, children } from 'solid-js';
import styles from './Gists.module.css';

type GistsWrapperProps = {
  children: JSXElement;
};

function GistsWrapper(props: GistsWrapperProps) {
  const c = children(() => props.children);
  return (
    <div class={styles.container}>
      <h3 class="font-semibold">Gists</h3>
      {c()}
    </div>
  );
}

export default GistsWrapper;
