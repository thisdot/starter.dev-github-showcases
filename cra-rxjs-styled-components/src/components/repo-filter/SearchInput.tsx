import { useRepoFilter } from '../../context/RepoFilterContext';
import { SearchTextInput } from './RepoFilter.styles';

export default function SearchInput() {
	const { search, setSearch } = useRepoFilter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
			autoFocus
			onInput={handleChange}
		/>
	);
}
