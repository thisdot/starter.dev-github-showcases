import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CorrectIcon = (props: SvgProps) => (
  <Svg height="16" viewBox="0 0 16 16" width="16" fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
    />
  </Svg>
);

export default CorrectIcon;
