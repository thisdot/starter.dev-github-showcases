import { Repository } from '@/interfaces/repositories.interfaces';

// Function to filter repos by search
export const repoDataFilteredBySearch = ({
	repos,
	search,
}: {
	repos: Repository[];
	search: string;
}) => {
	if (repos.length < 1) {
		return repos;
	}
	return repos.reduce((acc: Repository[], repo: Repository) => {
		if (search !== '' && !repo?.name?.match(new RegExp(search, 'ig'))) {
			return acc;
		}

		return [...acc, repo];
	}, []);
};
