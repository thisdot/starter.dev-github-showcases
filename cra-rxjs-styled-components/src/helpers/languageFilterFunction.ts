import { defaultLanguage } from '../components/repo-filter/data';
import { Repository } from '../interfaces/repositories.interfaces';

const matchText = (target: string, value: string) =>
	target?.match(new RegExp(value, 'i'));

// Function to filter repos by language
export const repoDataFilteredByLanguage = ({
	repos,
	language,
}: {
	repos: Repository[];
	language: string;
}): Repository[] => {
	let response = repos.slice();
	if (repos && language && language !== defaultLanguage) {
		// response = repos.filter((repo: Repository) =>
		// 	matchText(repo?.primaryLanguage?.name, language)
		// );
	} else if (language === defaultLanguage) {
		response = repos;
	}
	return response;
};
