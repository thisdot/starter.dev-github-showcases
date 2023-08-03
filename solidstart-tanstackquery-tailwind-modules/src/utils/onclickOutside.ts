import { Setter, onCleanup } from 'solid-js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function clickOutside(el: Element, accessor: () => Setter<any>) {
  const onClick = (e: MouseEvent) => {
    !el.contains(e.target as Element) && accessor()?.();
  };
  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
}
