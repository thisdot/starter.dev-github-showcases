import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function CodeIcon(props: SvgProps) {
  return (
    <Svg height={16} width={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </Svg>
  );
}

export default CodeIcon;
