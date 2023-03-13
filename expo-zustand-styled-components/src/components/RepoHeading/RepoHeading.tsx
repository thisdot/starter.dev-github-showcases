import PrivacyBadge from '../PrivacyBadge';
import PrivacyIcon from './PrivacyIcon';
import {
  BadgePlaceholder,
  Heading,
  HeadingContent,
  NameLink,
  OwnerLink,
  Separator,
} from './RepoHeading.styles';

import { useWindowDimensions } from 'react-native';

const RepoHeading = () => {
  const { width } = useWindowDimensions();
  const info = {
    visibility: 'public',
  };

  return (
    <Heading>
      <PrivacyIcon visibility={info.visibility} />
      <HeadingContent>
        <OwnerLink screenWidth={width}>owner</OwnerLink>
        <Separator>/</Separator>
        <NameLink screenWidth={width}>repo-name</NameLink>
      </HeadingContent>
      {info.visibility ? <PrivacyBadge visibility={info.visibility} /> : <BadgePlaceholder />}
    </Heading>
  );
};

export default RepoHeading;
