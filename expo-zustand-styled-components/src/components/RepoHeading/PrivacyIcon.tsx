import { View } from 'react-native';
import PadlockIcon from '../Icons/PadlockIcon';
import RepoIcon from '../Icons/RepoIcon';
import { IconPlaceholder } from './RepoHeading.styles';

import { colors } from '../../utils/style-variables';

interface PrivacyIconProps {
  visibility: string;
}
const PrivacyIcon = ({ visibility }: PrivacyIconProps) => {
  const isPrivate = 'private'.localeCompare(visibility) > 0;
  
  if (!visibility) <IconPlaceholder />;

  return (
    <View>
      {isPrivate ? <PadlockIcon color={colors.gray400} /> : <RepoIcon color={colors.gray400} />}
    </View>
  );
};


export default PrivacyIcon;