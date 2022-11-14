import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { iconStyles } from './icons.styles';
import { IconProps } from './types';

export const ResolvedIssueIcon = component$(({ className }: IconProps) => {
  useStylesScoped$(iconStyles);
  return (
    <svg version="1.1" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" className={className ?? ''}>
      <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
      <path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
    </svg>
  );
});
