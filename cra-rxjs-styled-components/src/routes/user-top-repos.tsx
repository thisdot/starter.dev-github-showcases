import { Layout } from '../components/layouts/Layout';
import RepoCard from '../components/repo-card';
import UserGists from '../components/user-gists';
import styled from 'styled-components';
import { useGists } from '../hooks/gists/use-gists';
import { useRepos } from '../hooks/repositories/use-repos';
import { useUser } from '../context/UserProvider';

const Page = styled.div`
	padding: 3rem;
`;

const Main = styled.main`
	width: 100%;
	background-color: rgb(243, 244, 246);
	max-width: 1024px;
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

const ViewRepositoriesContainer = styled.div`
	background-color: rgb(249 250 251);
	padding: 1.25rem;
	text-align: center;
`;

const ViewRepositoriesLink = styled.a`
	font-weight: 600;
	text-decoration: none;
	cursor: pointer;
	color: rgb(75 85 99);
	&:hover {
		color: rgb(59 130 246);
	}
`;

export default function TopRepos() {
	const user = useUser();
	const { repositories } = useRepos(user?.login);
	const gists = useGists();
	const topRepositories = [...repositories]
		.sort((a, b) => b.stargazers_count - a.stargazers_count)
		.slice(0, 10);

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
							{toprepositories.map((repo) => (
								<RepoCard repo={repo} key={repo.id} />
							))}
							<ViewRepositoriesContainer>
								<ViewRepositoriesLink href={`/${user?.login}`}>
									View all Repositories
								</ViewRepositoriesLink>
							</ViewRepositoriesContainer>
						</RepositoriesContainer>
					</Page>
				</Main>
			</Layout>
		</>
	);
}
