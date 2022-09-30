import { SocialCount, TextSpan } from './RepoMeta.styles';
import { ReactNode } from 'react';

interface MetaIconProps {
	text: number | string;
	children: ReactNode;
}

function MetaIcon({ text, children }: MetaIconProps) {
	return (
		<SocialCount>
			{children}
			<TextSpan>{text}</TextSpan>
		</SocialCount>
	);
}
export default MetaIcon;
