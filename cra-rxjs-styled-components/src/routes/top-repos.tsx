import styled from 'styled-components';
import RepositoryCard from '../components/top-repositories/repository';
import { useTopRepos } from '../hooks/top-repositories/use-top-repos';

const Page = styled.div`
  width: 100%;
`;

const Heading = styled.h2`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1rem;
`;

const RepositoriesContainer = styled.section`
  background-color: rgb(255, 255, 255);
  position: relative;
  width: 926px;
  border-radius: 0.5rem;
  border: 1px solid rgb(229, 231, 235);
`;

export default function TopRepos() {
  const repositories = useTopRepos();

  return (
    <Page>
      <Heading>Top Repositories</Heading>
      <RepositoriesContainer>
        {repositories.map((r) => (
          <RepositoryCard repository={r} key={r.id}></RepositoryCard>
        ))}
      </RepositoriesContainer>
    </Page>
  );
}
