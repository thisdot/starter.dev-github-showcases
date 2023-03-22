import styled from 'styled-components/native';
import { breakpoints } from '../../../utils/breakpoints';

export const ContainerStyled = styled.View<{ screenWidth: number }>`
  flex: 1;
  padding-right: ${({ screenWidth }) => (screenWidth > breakpoints.laptop ? '5%' : 0)};
`;

export const ProfileSearchViewStyled = styled.View`
  gap: 10px;
  padding: 16px;
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
