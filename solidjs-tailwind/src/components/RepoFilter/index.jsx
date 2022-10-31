import SearchInput from "./SearchInput"

export const RepoFilter = () => {
  return (
    <div class="flex relative mb-4 space-x-4">
      <div class="flex-grow">
        <SearchInput />
      </div>
      <div class="flex items-center space-x-1.5"></div>
    </div>
  );
}
