import { useWindowDimensions } from 'react-native';

import PrivacyBadge from '../PrivacyBadge';
import PrivacyIcon from './PrivacyIcon';

import {
  Heading,
  NameLink,
  OwnerLink,
  Separator,
  HeadingContent,
  BadgePlaceholder,
  RepoContentWrapper,
} from './RepoHeading.styles';

import { useRepoInfoStore } from '../../hooks/stores';
import { truncateString } from '../../utils/truncateString';

const RepoHeading = () => {
  const { name, owner, info } = useRepoInfoStore();
  const { width } = useWindowDimensions();

  return (
    <Heading screenWidth={width}>
      <PrivacyIcon visibility={info?.visibility} />
      <RepoContentWrapper screenWidth={width}>
        <HeadingContent>
          <OwnerLink screenWidth={width}>{owner}</OwnerLink>
          <Separator>/</Separator>
          <NameLink screenWidth={width} numberOfLines={1}>
            {width <= 330 ? truncateString(name, 22) : name}
          </NameLink>
        </HeadingContent>
        {info?.visibility ? <PrivacyBadge visibility={info?.visibility} /> : <BadgePlaceholder />}
      </RepoContentWrapper>
    </Heading>
  );
};

export default RepoHeading;
