import cn from 'classnames';
import { component$ } from '@builder.io/qwik';

export interface PrivacyBadgeProps {
  isPrivate: boolean;
  className?: string;
}

export const PrivacyBadge = component$(({ isPrivate, className }: PrivacyBadgeProps) => {
  return (
    <span class={cn('py-0.5 px-2 text-xs rounded-xl text-gray-600 border border-gray-300 font-medium', className)}>
      {isPrivate ? 'Private' : 'Public'}
    </span>
  );
});
