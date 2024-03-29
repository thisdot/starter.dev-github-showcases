import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const MergedPrIcon = (props: SvgProps) => {
  return (
    <Svg fill="currentColor" viewBox="0 0 16 16" width={16} height={16} {...props}>
      <Path
        fillRule="evenodd"
        d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
      />
    </Svg>
  );
};

export default MergedPrIcon;
