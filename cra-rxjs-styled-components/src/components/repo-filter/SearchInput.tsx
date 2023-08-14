import { useRepoFilter } from '../../context/RepoFilterContext';
import { SearchTextInput } from './RepoFilter.styles';

export default function SearchInput() {
	const { search, setSearch } = useRepoFilter();

	const handleChange = (e: any) => {
		setSearch(e.target.value);
	};
	return (
		<SearchTextInput
			role="search"
			type="search"
			name="search"
			id="search"
			placeholder="Find a repository..."
			value={search}
			onInput={handleChange}
		/>
	);
}
