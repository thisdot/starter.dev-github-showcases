import Svg, { Path, SvgProps } from 'react-native-svg';

function FolderIcon(props: SvgProps) {
  return (
    <Svg fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </Svg>
  );
}

export default FolderIcon;
