import { SORT_OPTIONS } from '../components/repo-filter/data';
import { Repository } from '../interfaces/repositories.interfaces';

const getTime = (time: Date) => new Date(time).getTime();

// Function to sort filtered repos
export const sortedRepoData = ({
	repos,
	sortBy,
}: {
	repos: Repository[];
	sortBy: string;
}) => {
	const response = repos.slice();
	if (sortBy === SORT_OPTIONS.name) {
		response.sort((a, b) => a.name.localeCompare(b.name));
	} else if (sortBy === SORT_OPTIONS.stars) {
		response.sort((a, b) => (b.stargazers_count > a.stargazers_count ? 1 : -1));
	} else {
		response.sort((a, b) => getTime(b.updated_at) - getTime(a.updated_at));
	}
	return response;
};
