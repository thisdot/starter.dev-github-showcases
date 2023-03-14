import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const IssuesIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 16 16" fill="currentColor" width={16} height={16} {...props}>
      <Path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <Path
        fill-rule="evenodd"
        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
      />
    </Svg>
  );
};

export default IssuesIcon;
