import { Layout } from '../components/layouts/Layout';
import PaginateButton from '../components/paginate-button';
import { PaginateWrapper } from '../components/paginate-button/PaginateButton.style';
import RepoCard from '../components/repo-card';
import UserGists from '../components/user-gists';
import styled from 'styled-components';
import { useGists } from '../hooks/gists/use-gists';
import { useRepos } from '../hooks/repositories/use-repos';
import { useUser } from '../context/UserProvider';

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
  const user = useUser();
  const { repositories, prevPage, nextPage, hasNextPage, hasPrevPage } =
    useRepos(user?.login);
  const gists = useGists();

  return (
    <>
      <Layout>
        <UserGists
          title="Gists"
          links={gists.map((gist) => ({
            id: gist.id,
            title: gist.filename,
            href: gist.html_url,
          }))}
        />
        <Main>
          <Page>
            <Heading>Repositories</Heading>
            <RepositoriesContainer>
              {repositories.map((repo) => (
                <RepoCard repo={repo} key={repo.id} />
              ))}
            </RepositoriesContainer>

            <PaginateWrapper>
              <PaginateButton onClick={prevPage} disabled={!hasPrevPage}>
                <span className="prev"></span> Previous
              </PaginateButton>
              <PaginateButton onClick={nextPage} disabled={!hasNextPage}>
                Next <span className="next"></span>
              </PaginateButton>
            </PaginateWrapper>
          </Page>
        </Main>
      </Layout>
    </>
  );
}
