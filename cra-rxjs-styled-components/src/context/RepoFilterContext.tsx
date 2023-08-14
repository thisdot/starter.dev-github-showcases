import {
	FILTER_TYPE_OPTIONS,
	SORT_OPTIONS,
	defaultLanguage,
} from '../components/repo-filter/data';
import { ReactNode, createContext, useContext, useState } from 'react';

export interface RepoFilterContextInterface {
	search: string;
	setSearch: (value: string) => void;
	language: string;
	setLanguage: (value: string) => void;
	sortBy: string;
	setSortBy: (value: string) => void;
	filterType: string;
	setFilterType: (value: string) => void;
	resetFilter: () => void;
}

interface RepoFilterProviderProps {
	children: ReactNode;
}
export const RepoFilterContext = createContext<
	RepoFilterContextInterface | undefined
>(undefined);

export function RepoFilterProvider({ children }: RepoFilterProviderProps) {
	const [search, setSearch] = useState('');
	const [language, setLanguage] = useState(defaultLanguage);
	const [sortBy, setSortBy] = useState(SORT_OPTIONS.default);
	const [filterType, setFilterType] = useState(FILTER_TYPE_OPTIONS.default);

	const resetFilter = () => {
		setSearch('');
		setLanguage(defaultLanguage);
		setSortBy(SORT_OPTIONS.default);
		setFilterType(FILTER_TYPE_OPTIONS.default);
	};
	return (
		<RepoFilterContext.Provider
			value={{
				search,
				language,
				sortBy,
				filterType,
				setSearch,
				setLanguage,
				setSortBy,
				setFilterType,
				resetFilter,
			}}
		>
			{children}
		</RepoFilterContext.Provider>
	);
}

export function useRepoFilter() {
	const context = useContext(RepoFilterContext);
	if (context === undefined) {
		throw new Error('useRepoFilter must be used within a RepoPage');
	}
	return context;
}
