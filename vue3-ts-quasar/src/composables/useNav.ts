import { useRouter } from 'vue-router';

interface UseNav {
  goTo: (link: string, wait: number) => void;
  goToExternal: (link: string, wait: number) => void;
  linkIsActive: (linkPath: string) => boolean;
}

export const useNav = (): UseNav => {
  const $router = useRouter();

  /** @param {String} linkPath the path the link is meant to redirect to. For example: `/auth` */
  const linkIsActive = (linkPath: string) => {
    return window.location.pathname === linkPath;
  };

  /** Redirect user the given link after the wait duration
   * @param link The link to redirect to
   * @param wait The amount of time to wait before redirecting in milliseconds
   */
  const goTo = (link: string, wait = 0) => {
    if (window.location.pathname !== link) {
      setTimeout(() => {
        void $router.push({
          path: link,
        });
      }, wait);
    }
  };

  /** Redirect user an external link after the wait duration
   * @param link The link to redirect to
   * @param wait The amount of time to wait before redirecting in milliseconds
   */
  const goToExternal = (link: string, wait = 0) => {
    setTimeout(() => {
      window.location.replace(link);
    }, wait);
  };

  return {
    goTo,
    goToExternal,
    linkIsActive,
  };
};
