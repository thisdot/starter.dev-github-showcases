import { View } from 'react-native';
import PadlockIcon from '../Icons/PadlockIcon';
import RepoIcon from '../Icons/RepoIcon';
import { IconPlaceholder } from './RepoHeading.styles';

import { colors } from '../../utils/style-variables';

interface PrivacyIconProps {
  visibility: string;
}
const PrivacyIcon = ({ visibility }: PrivacyIconProps) => {
  const isPrivate = 'private'.localeCompare(visibility) === 0;

  if (!visibility) return <IconPlaceholder testID="icon-placeholder" />;

  return (
    <View testID="privacy-icon">
      {isPrivate ? (
        <PadlockIcon testID="padlock-icon" color={colors.gray400} />
      ) : (
        <RepoIcon testID="repo-icon" color={colors.gray400} />
      )}
    </View>
  );
};

export default PrivacyIcon;
