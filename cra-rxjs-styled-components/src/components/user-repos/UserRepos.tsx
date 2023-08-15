import { NetlifyBadgeContainer, RepoListWrapper } from './UserRepos.styles';
import { useUserRepositories } from '../../hooks/user-repositories/use-user-repositories';
import RepoCard from '../repo-card/RepoCard';
import useRepoSortFilter from '../../hooks/repositories/use-repo-sort-filter';
import RepoFilter from '../repo-filter/Repofilter';

function UserRepos({ isOrg = false }) {
	const { loading, repos, languages } = useUserRepositories(isOrg);

	const sortAndFilteredRepositories = useRepoSortFilter(repos);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<RepoListWrapper>
			<RepoFilter
				languages={languages}
				filteredRepoCount={sortAndFilteredRepositories.length}
			/>
			{sortAndFilteredRepositories &&
				sortAndFilteredRepositories.map((repo) => <RepoCard repo={repo} star />)}

			<NetlifyBadgeContainer>
				<a target="_blank" rel="noreferrer noopener" href="https://www.netlify.com">
					<img
						src="https://www.netlify.com/v3/img/components/netlify-light.svg"
						alt="Deploys by Netlify"
					/>
				</a>
			</NetlifyBadgeContainer>
		</RepoListWrapper>
	);
}

export default UserRepos;
