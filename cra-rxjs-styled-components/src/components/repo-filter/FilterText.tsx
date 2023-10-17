import { useRepoFilter } from '../../context/RepoFilterContext';
import { defaultFilterType, defaultLanguage } from './data';
import { FilterTextContainer, FilterTextSmall } from './RepoFilter.styles';
import ClearFilterAndSortButtonText from '../clear-filter-and-sort-button/ClearFilterAndSortButtonText';

const modifyFilterTypeText = (filterText = 'test') => {
	if (filterText.endsWith('s')) {
		if (/forks/i.exec(filterText)) {
			filterText = filterText.replace('s', 'ed');
		} else {
			filterText = filterText.replace('s', '');
		}
	}
	return filterText;
};

type FilterTextProps = {
	filteredRepoCount?: number;
};

const FilterText = (props: FilterTextProps) => {
	const { filteredRepoCount } = props;
	const { filterType, search, language, sortBy, resetFilter } = useRepoFilter();

	return (
		<FilterTextContainer>
			<div className="flex-grow">
				<FilterTextSmall>
					<strong>{filteredRepoCount}</strong>
					results for
					{filterType && filterType !== defaultFilterType && (
						<strong>{modifyFilterTypeText(filterType)}</strong>
					)}{' '}
					repositories
					{search && (
						<span>
							matching <strong> {search} </strong>
						</span>
					)}
					{language && language !== defaultLanguage && (
						<span>
							written in
							<strong> {language} </strong>
						</span>
					)}
					<span>
						sorted by
						<strong>{' ' + sortBy}</strong>
					</span>
				</FilterTextSmall>
			</div>
			<ClearFilterAndSortButtonText
				variant="profile"
				resetFilter={resetFilter}
				text={'Clear filter'}
			/>
		</FilterTextContainer>
	);
};

export default FilterText;
