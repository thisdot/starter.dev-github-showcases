import { Badge, BadgeText } from './PrivacyBadge.style';
import { useWindowDimensions } from 'react-native';

interface PrivacyBadgeProps {
  visibility: string;
}

const PrivacyBadge = ({ visibility }: PrivacyBadgeProps) => {
  const { width } = useWindowDimensions();
  return (
    <Badge>
      <BadgeText screenWidth={width}>{visibility}</BadgeText>
    </Badge>
  );
};
export default PrivacyBadge;
