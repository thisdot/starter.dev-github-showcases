import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';

export const SafeAreaViewStyled = styled.SafeAreaView<{ screenWidth: number }>`
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
  border-top-width: 1px;
  border-top-color: #e1e4e8;
  margin-top: 20px;
  padding-top: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e1e4e8;
  margin-bottom: 20px;
  padding-bottom: 20px;
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
  background-color: white;
  border-width: 1px;
  border-color: #e1e4e8;
  border-radius: 6px;
`;

export const GistsListStyled = styled.FlatList`
  flex: 1;
`;

export const TitleStyled = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;
