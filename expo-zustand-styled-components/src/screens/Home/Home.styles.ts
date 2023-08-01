import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';
import { colors } from '../../utils/style-variables';

export const SafeAreaViewStyled = styled.SafeAreaView`
  background-color: #f3f4f6;
`;

export const ContainerStyled = styled.View<{ screenWidth: number }>`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ screenWidth }) => {
    if (screenWidth > breakpoints.laptop) {
      return `
      flex-direction: row;
      justify-content: space-between;
    `;
    }
  }}
`;

export const GistsStyled = styled.View<{ screenWidth: number }>`
  ${({ screenWidth }) => (screenWidth > breakpoints.laptop ? 'flex: 0.3;' : '')}
  padding: 20px;
  background-color: white;
`;

export const GistsListContainerStyled = styled.View`
  margin-top: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: ${colors.gray100};
  border-bottom-color: ${colors.gray100};
`;

export const RepositoriesStyled = styled.View<{ screenWidth: number }>`
  ${({ screenWidth }) =>
    screenWidth > breakpoints.laptop
      ? `
    flex: 0.7;
    padding: 40px;
  `
      : `
    padding: 20px;    
  `}
`;

export const RepositoriesListContainerStyled = styled.View`
  border-width: 1px;
  border-radius: 6px;
  background-color: white;
  border-color: ${colors.gray100};
`;

export const GistsListStyled = styled.FlatList`
  flex: 1;
`;

export const TitleStyled = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ViewAllReposButtonStyled = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
