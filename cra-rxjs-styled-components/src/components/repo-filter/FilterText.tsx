import { useRepoFilter } from '../../context/RepoFilterContext';
import { defaultFilterType, defaultLanguage } from './data';
import { CloseIcon } from '../icons';
import {
	ClearButtonContainer,
	ClearButtonText,
	FilterTextContainer,
	FilterTextSmall,
} from './RepoFilter.styles';

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
			<ClearButtonContainer onClick={resetFilter}>
				<ClearButtonText>
					<CloseIcon />
				</ClearButtonText>
				Clear filter
			</ClearButtonContainer>
		</FilterTextContainer>
	);
};

export default FilterText;