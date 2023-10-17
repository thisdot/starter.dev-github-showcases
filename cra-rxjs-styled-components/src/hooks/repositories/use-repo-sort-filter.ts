import { useRepoFilter } from '../../context/RepoFilterContext';
import { repoDataFilteredByLanguage } from '../../helpers/languageFilterFunction';
import { repoDataFilteredBySearch } from '../../helpers/searchFunction';
import { sortedRepoData } from '../../helpers/sortRepoFunction';
import { repoDataFilteredByType } from '../../helpers/typeFilterFunction';
import { Repository } from '../../interfaces/repositories.interfaces';

const useRepoSortFilter = (repos: Repository[]): Repository[] => {
	let result = repos;
	const { sortBy, language, search, filterType } = useRepoFilter();

	if (search) {
		result = repoDataFilteredBySearch({ repos: result, search });
	}

	if (language) {
		result = repoDataFilteredByLanguage({ repos: result, language });
	}

	if (filterType) {
		result = repoDataFilteredByType({ repos: result, filterType });
	}

	if (sortBy) {
		result = sortedRepoData({ repos: result, sortBy });
	}

	return result;
};

export default useRepoSortFilter;
