import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const StyledHeader = styled.View`
  width: 100%;
  padding-horizontal: 16px;
  background-color: rgb(17, 24, 39);
  padding-top: ${Platform.OS === 'web' ? '0px' : '32px'};
`;

export const StyledHeaderContainer = styled.View`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  border: 1px solid rgb(17, 24, 39);
  height: ${Platform.OS === 'web' ? '70px' : '60px'};
`;
