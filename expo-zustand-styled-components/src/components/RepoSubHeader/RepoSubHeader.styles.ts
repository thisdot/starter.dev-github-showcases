import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const Wrapper = styled.View`
  padding-top: 8px;
  padding-horizontal: 14px;
  background-color: ${colors.gray100};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.gray300};
`;

export const TopRow = styled.View<ScreenWidth>`
  flex-direction: ${({screenWidth}) => screenWidth > breakpoints.tablet ? 'row' : 'column'};
  align-items: ${({screenWidth}) => screenWidth > breakpoints.tablet ? 'center' : 'flex-start'};
  justify-content: space-between;
  gap: 20px;
`;

export const BottomRow = styled.View`
  margin-top: 48px;
`;