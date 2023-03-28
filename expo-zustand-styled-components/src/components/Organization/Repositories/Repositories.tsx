import { FlatList, useWindowDimensions } from 'react-native';

import { ContainerStyled } from './Repositories.styles';

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
  const { width } = useWindowDimensions();

  return (
    <ContainerStyled style={{ justifyContent: 'flex-start', flex: 0 }} screenWidth={width}>
      <RepoFilter languages={[]} filteredRepoCount={0} repoBtnText="New" />
      <FlatList
        data={repos}
        scrollEnabled={false}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => <RepoCard repo={item} />}
        ListFooterComponent={
          <Pagination
            goToNext={goToNext}
            goToPrev={goToPrev}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        }
      />
    </ContainerStyled>
  );
};

export default Repositories;
