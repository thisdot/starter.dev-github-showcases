import type { IconName } from '../icons';

export type PageNavigationTabViewModel = {
  count?: number;
  href: string;
  icon: IconName;
  pageId: string;
  label: string;
};
