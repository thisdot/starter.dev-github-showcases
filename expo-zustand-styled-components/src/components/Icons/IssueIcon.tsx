import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function IssueIcon(props: SvgProps) {
  return (
    <Svg
      fill="none"
      height={16}
      width={16}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      {...props}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </Svg>
  );
}

export default IssueIcon;
