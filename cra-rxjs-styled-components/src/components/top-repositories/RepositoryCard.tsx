import { formatDistanceToNow } from 'date-fns';
import { getColourForLanguage } from '../../helpers/colours';
import { RepositoryWithBranchCount } from '../../interfaces/repositories.interfaces';
import { BranchLogo } from '../misc/BranchLogo';
import { StarLogo } from '../misc/StarLogo';
import {
  Card,
  Heading,
  RepoNameLink,
  Badge,
  Description,
  MetaData,
  LanguageColor,
  LanguageWrapper,
  IconWrapper,
} from './RepositoryCard.styles';

export default function RepositoryCard({
  repository,
}: {
  repository: RepositoryWithBranchCount;
}) {
  const since = formatDistanceToNow(new Date(repository.updated_at), {
    addSuffix: true,
  });

  return (
    <Card>
      <Heading>
        <RepoNameLink to={`${repository.owner.login}/${repository.name}`}>
          {repository.name}
        </RepoNameLink>{' '}
        {repository.visibility === 'public' && <Badge>Public</Badge>}
      </Heading>
      <Description>{repository.description}</Description>
      <MetaData>
        <LanguageWrapper>
          <LanguageColor color={getColourForLanguage(repository.language)} />
          <span>{repository.language}</span>
        </LanguageWrapper>
        <IconWrapper>
          <StarLogo />
          <span>{repository.stargazers_count}</span>
        </IconWrapper>
        <IconWrapper>
          <BranchLogo />
          <span>{repository.branches_count}</span>
        </IconWrapper>
        <span> Updated {since}</span>
      </MetaData>
    </Card>
  );
}
