import { FlatList } from 'react-native';

import RepoCard from '../../RepoCard';
import RepoFilter from '../../RepoFilter';
import Pagination from '../../Pagination';

import { Repo } from '../../../types/user-repos-type';

const Repositories = ({
  repos,
  goToNext,
  goToPrev,
  hasNextPage,
  hasPrevPage,
}: {
  repos: Repo[];
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
      ListHeaderComponent={<RepoFilter languages={[]} filteredRepoCount={0} repoBtnText="New" />}
      ListFooterComponent={
        <Pagination
          goToNext={goToNext}
          goToPrev={goToPrev}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
      }
    />
  );
};

export default Repositories;
