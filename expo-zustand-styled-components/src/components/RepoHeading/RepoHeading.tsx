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
import { breakpoints } from '../../utils/breakpoints';

const RepoHeading = () => {
  const { name, owner, info } = useRepoInfoStore();
  const { width } = useWindowDimensions();

  return (
    <Heading screenWidth={width}>
      <PrivacyIcon visibility={info?.visibility} />
      <RepoContentWrapper screenWidth={width}>
        <HeadingContent screenWidth={width}>
          <OwnerLink screenWidth={width}>{owner}</OwnerLink>
          {width > breakpoints.mobile ? <Separator>/</Separator> : null}
          <NameLink screenWidth={width} numberOfLines={1}>
            {name}
          </NameLink>
        </HeadingContent>
        {info?.visibility ? <PrivacyBadge visibility={info?.visibility} /> : <BadgePlaceholder />}
      </RepoContentWrapper>
    </Heading>
  );
};

export default RepoHeading;
