import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function EyeIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height={16} width={16} {...props} fill="currentColor">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    </Svg>
  );
}

export default EyeIcon;
