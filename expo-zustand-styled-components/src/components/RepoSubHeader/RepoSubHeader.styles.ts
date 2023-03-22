import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number;
};

export const Wrapper = styled.View<ScreenWidth>`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background-color: ${colors.gray100};
  border-bottom-color: ${colors.gray300};
  gap: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? '32px' : '20px')};
  padding-top: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? '28px' : '10px')};
  padding-horizontal: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? '3%' : '16px')};
`;

export const TopRow = styled.View<ScreenWidth>`
  gap: 10px;
  justify-content: space-between;
  flex-direction: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? 'row' : 'column')};
  align-items: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? 'center' : 'flex-start')};
`;
