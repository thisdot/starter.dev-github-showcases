import styled from 'styled-components/native';
import { breakpoints } from '../../../utils/breakpoints';

export const ContainerStyled = styled.View<{ screenWidth: number }>`
  flex: 1;
  display: flex;
  padding-right: ${({ screenWidth }) =>screenWidth > breakpoints.laptop ? '5%' : 0};
`;

export const ContentViewStyled = styled.View`
  display: flex;
`;

export const ProfileSearchViewStyled = styled.View`
  padding: 16px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  background-color: #fff;
`;

export const ReposContainer = styled.View`
  flex: 1; 
`;

export const PaginationContainer = styled.View`
  flex: 1; 
  align-items: center;
`;
