import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CaretIcon = (props: SvgProps) => (
  <Svg
    height="16"
    viewBox="0 0 16 16"
    width="16"
    data-view-component="true"
    fill="currentColor"
    {...props}>
    <Path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z" />
  </Svg>
);

export default CaretIcon;
