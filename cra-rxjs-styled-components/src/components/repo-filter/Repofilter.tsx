import { useRepoFilter } from '../../context/RepoFilterContext';
import FilterDropdown from '../filter-dropdown/FilterDropdown';
import { RepoBookIcon } from '../icons';
import {
	Container,
	FiltersWrapper,
	RepoBtn,
	RepoBtnText,
	RepoFilterWrapper,
} from './RepoFilter.styles';
import SearchInput from './SearchInput';
import { FILTER_TYPE_OPTIONS, SORT_OPTIONS } from './data';

interface RepoFilterProps {
	languages?: string[];
	filteredRepoCount?: number;
	repoBtnText?: string;
}

export default function RepoFilter({
	languages,
	filteredRepoCount,
	repoBtnText,
}: RepoFilterProps) {
	const typeOptions = Object.values(FILTER_TYPE_OPTIONS);
	const sortOptions = Object.values(SORT_OPTIONS);
	const languageOptions = ['All', 'HTML', 'CSS', 'PHP'];
	const { filterType, setFilterType, language, setLanguage, sortBy, setSortBy } =
		useRepoFilter();

	return (
		<Container>
			<RepoFilterWrapper>
				<SearchInput />
				<FiltersWrapper>
					<FilterDropdown
						name="Type"
						items={typeOptions}
						selectOption={setFilterType}
						selected={filterType}
					/>
					<FilterDropdown
						name="Language"
						items={languages && languages.length > 0 ? languages : languageOptions}
						selectOption={setLanguage}
						selected={language}
					/>
					<FilterDropdown
						name="Sort"
						items={sortOptions}
						selected={sortBy}
						selectOption={setSortBy}
					/>
				</FiltersWrapper>
				<RepoBtn>
					<RepoBookIcon color="#fff" />
					<RepoBtnText>{repoBtnText || 'New'}</RepoBtnText>
				</RepoBtn>
			</RepoFilterWrapper>
		</Container>
	);
}
