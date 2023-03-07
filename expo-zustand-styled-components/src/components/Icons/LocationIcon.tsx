import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function LocationIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 16 16" fill="currentColor" width={16} height={16} {...props}>
      <Path
        fill-rule="evenodd"
        d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></Path>
    </Svg>
  );
}
