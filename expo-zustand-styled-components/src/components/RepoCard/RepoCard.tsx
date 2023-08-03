import { Text, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';

import { Card, Content, Heading, StarBtn, LinkText, Description } from './RepoCard.styles';

import { colors } from '../../utils/style-variables';
import { Repo } from '../../types/user-repos-type';

import { StarLogo } from '../Icons/StarLogo';
import RepoMeta from './RepoMeta';
import PrivacyBadge from '../PrivacyBadge';
import LinkButton from '../LinkButton/LinkButton';
interface RepoCardProps {
  repo: Repo;
  isProfilePage?: boolean;
}

const RepoCard = ({ repo, isProfilePage }: RepoCardProps) => {
  const { width } = useWindowDimensions();

  const repoNameWithOwnerLink = () =>
    repo.owner?.login ? `/${repo.owner.login}/${repo.name || ''}` : '';

  const repoNameWithOwner = () =>
    `${!isProfilePage ? `${repo.owner?.login + '/' || ''}` : ''}${repo.name || ''}`;

  return (
    <Card>
      <Content>
        <Heading>
          <LinkButton to={repoNameWithOwnerLink()} hasLine>
            <LinkText screenWidth={width}>{repoNameWithOwner()}</LinkText>
          </LinkButton>
          <PrivacyBadge visibility={repo.visibility} />
        </Heading>
        <Description numberOfLines={2}>{repo.description}</Description>
        <RepoMeta
          language={repo.primaryLanguage.name}
          updatedAt={repo.updatedAt}
          stargazerCount={repo.stargazerCount}
          forkCount={repo.forkCount}
        />
      </Content>
      {isProfilePage && (
        <TouchableWithoutFeedback>
          <StarBtn>
            <StarLogo color={colors.gray700} width={18} height={18} />
            <Text style={{ marginLeft: 5 }}>Star</Text>
          </StarBtn>
        </TouchableWithoutFeedback>
      )}
    </Card>
  );
};

export default RepoCard;
