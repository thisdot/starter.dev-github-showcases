import cn from 'classnames';
import { component$ } from '@builder.io/qwik';
import * as styles from './privacy-badge.className';

export interface PrivacyBadgeProps {
  isPrivate: boolean;
  className?: string;
}

export const PrivacyBadge = component$(({ isPrivate, className }: PrivacyBadgeProps) => {
  return <span class={cn(styles.tag, className)}>{isPrivate ? 'Private' : 'Public'}</span>;
});
