import { Badge } from './PrivacyBadge.styles';

interface PrivacyBadgeProps {
	visibility: string;
}

function PrivacyBadge({ visibility }: PrivacyBadgeProps) {
	return (
		<Badge>{visibility.charAt(0).toUpperCase() + visibility.slice(1)}</Badge>
	);
}

export default PrivacyBadge;
