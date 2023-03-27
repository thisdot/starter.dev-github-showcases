import {
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';

import {
  Card,
  Content,
  Heading,
  StarBtn,
  LinkText,
  Description,
} from './RepoCard.styles';

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

  return (
    <Card>
      <Content>
        <Heading>
          <LinkButton to={`/${repo.owner.login}/${repo.name}`} hasLine>
            <LinkText screenWidth={width}>{repo.name}</LinkText>
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
