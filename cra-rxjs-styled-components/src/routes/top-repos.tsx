import styled from 'styled-components';
import RepositoryCard from '../components/top-repositories/RepositoryCard';
import { useTopRepos } from '../hooks/top-repositories/use-top-repos';
import { useGists } from '../hooks/gists/use-gists';
import Sidebar from '../components/layouts/Sidebar';
import { Layout } from '../components/layouts/Layout';

const Page = styled.div`
  width: 100%;
`;

const Main = styled.main`
  background-color: rgb(243, 244, 246);
  padding: 3rem;
  min-height: calc(100vh - 70px);
  @media (max-width: 850px) {
    padding: 2rem;
  }
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
  min-width: 350px;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgb(229, 231, 235);
`;

export default function TopRepos() {
  const repositories = useTopRepos();
  const gists = useGists();

  return (
    <>
      <Layout>
        <Sidebar
          title="Gists"
          links={gists.map((gist) => ({
            id: gist.id,
            title: gist.filename,
            href: gist.html_url,
          }))}
        />
        <Main>
          <Page>
            <Heading>Top Repositories</Heading>
            <RepositoriesContainer>
              {repositories.map((r) => (
                <RepositoryCard repository={r} key={r.id}></RepositoryCard>
              ))}
            </RepositoriesContainer>
          </Page>
        </Main>
      </Layout>
    </>
  );
}
