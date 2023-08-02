import { FlatList } from 'react-native';

import RepoCard from '../../RepoCard';
import RepoFilter from '../../RepoFilter';
import Pagination from '../../Pagination';

import { Repo } from '../../../types/user-repos-type';

const Repositories = ({
  repos,
  goToNext,
  goToPrev,
  languages,
  hasNextPage,
  hasPrevPage,
}: {
  repos: Repo[];
  languages: string[];
  goToNext: () => void;
  goToPrev: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}) => {
  return (
    <FlatList
      data={repos}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => <RepoCard repo={item} />}
      ListHeaderComponent={<RepoFilter languages={languages} filteredRepoCount={repos.length} repoBtnText="New" />}
      ListFooterComponent={
        repos.length > 0 && (
        <Pagination
          goToNext={goToNext}
          goToPrev={goToPrev}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
        )
      }
    />
  );
};

export default Repositories;
