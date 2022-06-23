import type { ComponentType } from 'react';

export interface TabItem {
  title: string;
  path?: string;
  Icon: ComponentType<{ className?: string }>;
  count?: number;
}
