import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { iconStyles } from './icons.styles';
import { IconProps } from './types';

// Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const PullRequestIcon = component$(({ className }: IconProps) => {
  useStylesScoped$(iconStyles);
  return (
    <svg className={className ?? ''} viewBox="0 0 16 16" version="1.1" aria-hidden="true" fill="currentColor">
      <path
        fill-rule="evenodd"
        fill="currentColor"
        d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
      ></path>
    </svg>
  );
});
