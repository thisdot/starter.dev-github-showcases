export function isParentWithinScope(target: HTMLElement, element: HTMLElement | undefined): boolean {
  if (target === element) {
    return true;
  }
  if (target.parentElement) {
    return isParentWithinScope(target.parentElement, element);
  }
  return false;
}
