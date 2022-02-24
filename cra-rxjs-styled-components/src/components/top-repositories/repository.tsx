import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getColourForLanguage } from '../../helpers/colours';
import { RepositoryWithBranchCount } from '../../interfaces/repositories.interfaces';
import { BranchLogo } from '../misc/branch-logo';
import { StarLogo } from '../misc/star-logo';

const Card = styled.article`
  padding: 1rem;
  border-bottom: 1px solid rgb(229, 231, 235);
`;

const Heading = styled.h3`
  margin: 0 0 0.5rem 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const Badge = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: rgb(75, 85, 99);
  padding: 0.125rem 0.5rem;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 12px;
`;

const RepoNameLink = styled(Link)`
  color: rgb(37, 99, 235);
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  margin-right: 0.75rem;

  :hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const MetaData = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-size: 12px;
  line-height: 24px;
`;

const LanguageColour = styled.div`
  background-color: ${(props: { colour: string }) => props.colour};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 1rem;
`;

const LanguageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  cursor: default;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-basis: 2.2rem;
  flex-shrink: 1;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;

  :hover {
    color: rgb(37, 99, 235);
  }
`;

export default function RepositoryCard({ repository }: { repository: RepositoryWithBranchCount }) {
  const since = formatDistanceToNow(new Date(repository.updated_at), { addSuffix: true });

  return (
    <Card>
      <Heading>
        <RepoNameLink to={`${repository.owner.login}/${repository.name}`}>{repository.name}</RepoNameLink>{' '}
        {repository.visibility === 'public' && <Badge>Public</Badge>}
      </Heading>
      <Description>{repository.description}</Description>
      <MetaData>
        <LanguageWrapper>
          <LanguageColour colour={getColourForLanguage(repository.language)} />
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
