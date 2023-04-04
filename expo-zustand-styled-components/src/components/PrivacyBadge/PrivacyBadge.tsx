import { useWindowDimensions } from 'react-native';
import { Badge, BadgeText } from './PrivacyBadge.style';

interface PrivacyBadgeProps {
  visibility: string;
}

const PrivacyBadge = ({ visibility }: PrivacyBadgeProps) => {
  const { width } = useWindowDimensions();
  return (
    <Badge testID="privacy-badge">
      <BadgeText screenWidth={width}>{visibility.toLowerCase()}</BadgeText>
    </Badge>
  );
};
export default PrivacyBadge;
