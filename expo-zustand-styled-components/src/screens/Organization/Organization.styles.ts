import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';

export const SafeAreaViewStyled = styled.SafeAreaView`
  height: 100%;
  background-color: #fff;
`;

export const ContainerStyled = styled.View<{ screenWidth: number }>`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-horizontal: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '15%' : 0)};
`;
