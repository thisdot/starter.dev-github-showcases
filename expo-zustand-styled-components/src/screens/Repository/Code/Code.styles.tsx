import styled from 'styled-components/native';
import { breakpoints } from '../../../utils/breakpoints';

export const SafeAreaViewStyled = styled.SafeAreaView`
  height: 100%;
  background-color: #fff;
`;

export const ContainerStyled = styled.View<{ screenWidth: number }>`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 20 : 14)}px;
  padding: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '50px 5% 10px 15%' : '16px')};
`;

export const MainContent = styled.View<{ screenWidth: number }>`
  flex: 1;
  gap: 30px;
  width: 100%;
  flex-grow: 1;
  flex-direction: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 'row' : 'column')};
  justify-content: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 'space-between' : 'flex-start')};
`;
  
export const Containter = styled.View<{ screenWidth: number }>`
  gap: 10px;
  flex-grow: 1;
  ${({ screenWidth }) => {
    if(screenWidth >= breakpoints.tablet) {
      return `flex: 0.75`
    }
  }}
`;
