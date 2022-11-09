import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { iconStyles } from './icons.styles';
import { IconProps } from './types';

// Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const IssuesIcon = component$(({ className }: IconProps) => {
  useStylesScoped$(iconStyles);
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className ?? ''}
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   stroke="currentColor"
    //   aria-hidden="true"
    // >
    //   <path
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //     stroke-width="2"
    //     d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //   />
    // </svg>
    <svg className={className ?? ''} viewBox="0 0 16 16" version="1.1" aria-hidden="true">
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
    </svg>
  );
});
