import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function PullRequestIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 5h2a2 2 0 0 1 2 2v8.17a3.001 3.001 0 1 1-2 0V7h-2v3l-4.5-4L15 2v3zM5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0V8.83zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </Svg>
  );
}

export default PullRequestIcon;
