import UserProfileView from '../components/user-profile/UserProfile';
import {
	Layout,
	NetlifyBadgeContainer,
} from '../components/layouts/ProfileLayout';
import Header from '../components/header/Header';
import { useUser } from '../context/UserProvider';
import { useRepos } from '../hooks/repositories/use-repos';
import RepoCard from '../components/repo-card/RepoCard';
import styled from 'styled-components';
import { PaginateWrapper } from '../components/paginate-button/PaginateButton.style';
import PaginateButton from '../components/paginate-button/PaginateButton';
import LoadingRepoCard from '../components/repo-card/LoadingRepoCard';

function Profile() {
	const context = useUser();
	const { repositories, prevPage, nextPage, hasNextPage, hasPrevPage } =
		useRepos(context?.user?.login);

	const ContentLayout = styled.div`
		grid-area: content;
	`;

	return (
		<>
			<Header />
			<Layout>
				<UserProfileView />
				<ContentLayout>
					{!repositories.length ? (
						<LoadingRepoCard />
					) : (
						<>
							{repositories.map((repo) => (
								<RepoCard repo={repo} key={repo.id} star />
							))}
							<PaginateWrapper>
								<PaginateButton onClick={prevPage} disabled={!hasPrevPage}>
									<span className="prev"></span> Previous
								</PaginateButton>
								<PaginateButton onClick={nextPage} disabled={!hasNextPage}>
									Next <span className="next"></span>
								</PaginateButton>
							</PaginateWrapper>
						</>
					)}
				</ContentLayout>
				<NetlifyBadgeContainer>
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.netlify.com"
					>
						<img
							src="https://www.netlify.com/v3/img/components/netlify-light.svg"
							alt="Deploys by Netlify"
						/>
					</a>
				</NetlifyBadgeContainer>
			</Layout>
		</>
	);
}

export default Profile;
