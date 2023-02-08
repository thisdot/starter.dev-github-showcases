import { Setter, onCleanup } from 'solid-js';

export function clickOutside(el: Element, accessor: () => Setter<any>) {
  const onClick = (e: MouseEvent) => {
    !el.contains(e.target as Element) && accessor()?.();
  };
  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
}
