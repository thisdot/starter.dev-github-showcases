import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function GitBranchIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height={16} width={16} {...props} fill="currentColor">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5.001 5.001 0 0 1 14 13h-4a3.001 3.001 0 0 0-2.895 2.21zM6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </Svg>
  );
}

export default GitBranchIcon;
