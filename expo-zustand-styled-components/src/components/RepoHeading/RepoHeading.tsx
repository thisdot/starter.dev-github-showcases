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
import LinkButton from '../LinkButton/LinkButton';

const RepoHeading = () => {
  const { name, owner, info } = useRepoInfoStore();
  const { width } = useWindowDimensions();

  return (
    <Heading screenWidth={width}>
      <PrivacyIcon visibility={info?.visibility} />
      <RepoContentWrapper screenWidth={width}>
        <HeadingContent screenWidth={width}>
          <LinkButton testID="owner-link" to={info?.isOrg ? `/orgs/${owner}` : `/${owner}`} hasLine>
            <OwnerLink testID="owner-text" screenWidth={width}>
              {owner}
            </OwnerLink>
          </LinkButton>
          {width > breakpoints.mobile ? <Separator>/</Separator> : null}
          <LinkButton testID="name-link" to={`/${owner}/${name}`} hasLine>
            <NameLink testID="name-text" screenWidth={width} numberOfLines={1}>
              {name}
            </NameLink>
          </LinkButton>
        </HeadingContent>
        {info?.visibility ? <PrivacyBadge visibility={info?.visibility} /> : <BadgePlaceholder />}
      </RepoContentWrapper>
    </Heading>
  );
};

export default RepoHeading;
