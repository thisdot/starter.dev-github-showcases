import { useEffect, useState } from 'react';
import { useRepoFilter } from '../../context/RepoFilterContext';
import FilterDropdown from '../filter-dropdown/FilterDropdown';
import { RepoBookIcon } from '../icons';
import FilterText from './FilterText';
import {
	Container,
	FiltersWrapper,
	RepoBtn,
	RepoBtnText,
	RepoFilterWrapper,
} from './RepoFilter.styles';
import SearchInput from './SearchInput';
import {
	FILTER_TYPE_OPTIONS,
	SORT_OPTIONS,
	defaultFilterType,
	defaultLanguage,
} from './data';

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
	const {
		filterType,
		setFilterType,
		language,
		setLanguage,
		sortBy,
		setSortBy,
		search,
	} = useRepoFilter();

	const [isOnlySorted, setIsOnlySorted] = useState(true);

	useEffect(() => {
		setIsOnlySorted(
			!!sortBy &&
				!(
					language !== defaultLanguage ||
					filterType !== defaultFilterType ||
					search
				)
		);
	}, [sortBy, language, filterType, search]);

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
					<RepoBtnText href="https://github.com/new" target="_blank">
						{repoBtnText || 'New'}
					</RepoBtnText>
				</RepoBtn>
			</RepoFilterWrapper>
			{!isOnlySorted && <FilterText filteredRepoCount={filteredRepoCount} />}
		</Container>
	);
}
