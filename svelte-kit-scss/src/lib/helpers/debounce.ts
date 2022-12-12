// todo: refactor
export const debounce = <F extends CustomEvent>(func: (event: F) => void, waitFor: number) => {
  let timeout: NodeJS.Timeout;

  return (event: F): void => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(event), waitFor);
  };
};
