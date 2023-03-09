import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';

export const StyledHeader = styled.View<{ screenWidth: number }>`
  width: 100%;
  padding-horizontal: 16px;
  background-color: rgb(17, 24, 39);
  padding-top: ${({ screenWidth }) =>screenWidth > breakpoints.tablet ? '0px' : '32px'};
`;

export const StyledHeaderContainer = styled.View<{ screenWidth: number }>`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  border: 1px solid rgb(17, 24, 39);
  height: ${({ screenWidth }) =>screenWidth > breakpoints.tablet ? '80px' : '60px'};
`;
