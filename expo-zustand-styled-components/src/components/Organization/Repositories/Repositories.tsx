import { Text, useWindowDimensions } from 'react-native';

import { ReposContainer, ContainerStyled, PaginationContainer } from './Repositories.styles';

import RepoCard from '../../RepoCard';
import RepoFilter from '../../RepoFilter';
import { Repo } from '../../../types/user-repos-type';

const Repositories = ({ repos }: { repos: Repo[] }) => {
  const { width } = useWindowDimensions();

  return (
    <ContainerStyled style={{ justifyContent: 'flex-start' }} screenWidth={width}>
      <RepoFilter languages={[]} filteredRepoCount={0} repoBtnText="New" />
      <ReposContainer>
        {repos.map((item, index) => (
          <RepoCard key={item.id + index} repo={item} isProfilePage />
        ))}
        <PaginationContainer>
          <Text>Pagination</Text>
        </PaginationContainer>
      </ReposContainer>
    </ContainerStyled>
  );
};

export default Repositories;
