import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { iconStyles } from './icons.styles';
import { IconProps } from './types';

export const ClosedIssue = component$(({ className }: IconProps) => {
  useStylesScoped$(iconStyles);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className ?? ''} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
    </svg>
  );
});