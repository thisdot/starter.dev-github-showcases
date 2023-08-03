import type { Action } from 'svelte/action';

const isExternalEventTarget = (node: HTMLElement, target: EventTarget | null) => {
  return !node.contains(target as HTMLElement | null);
};

export const clickOutside: Action<HTMLElement> = (node: HTMLElement) => {
  const handleClick = (event: MouseEvent) => {
    if (node && isExternalEventTarget(node, event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('clickoutside'));
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
};
