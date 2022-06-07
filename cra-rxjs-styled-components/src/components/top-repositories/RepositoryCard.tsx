import { RepositoryWithBranchCount } from '../../interfaces/repositories.interfaces';
import PrivacyBadge from '../misc/Privacy-badge';
import RepoMeta from '../repo-meta';
import {
  Card,
  Heading,
  RepoNameLink,
  Badge,
  Description,
} from './RepositoryCard.styles';

export default function RepositoryCard({
  repository,
}: {
  repository: RepositoryWithBranchCount;
}) {
  const {
    owner,
    name,
    visibility,
    description,
    language,
    forks_count,
    stargazers_count,
    updated_at,
  } = repository;
  return (
    <Card>
      <Heading>
        <RepoNameLink to={`${owner.login}/${name}`}>{name}</RepoNameLink>{' '}
        <Badge>{<PrivacyBadge visibility={visibility} />}</Badge>
      </Heading>
      <Description>{description}</Description>
      <RepoMeta
        language={language}
        forkCount={forks_count}
        stargazerCount={stargazers_count}
        updatedAt={updated_at}
      />
    </Card>
  );
}
