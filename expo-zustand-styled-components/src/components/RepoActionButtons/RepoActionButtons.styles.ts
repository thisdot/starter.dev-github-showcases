import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';
import { colors } from '../../utils/style-variables';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const Container = styled.View<ScreenWidth>`
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
  justify-content: ${({ screenWidth }) =>
    screenWidth >= breakpoints.laptop ? 'space-between' : 'flex-start'};
  width: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 'none' : '100%')};
  gap: ${({ screenWidth }) => (screenWidth >= breakpoints.laptop ? '16px' : '8px')};
`;

export const BtnGroup = styled.View`
  border-radius: 8px;
  flex-direction: row;
`;

export const BtnMain = styled.TouchableOpacity`
  padding-vertical: 6px;
  border-right-width: 0;
  padding-horizontal: 12px;
  border-top-left-radius: 8px;
  background-color: transparent;
  border-bottom-left-radius: 8px;
  border: 1px solid ${colors.gray300};
`;

export const BtnMainText = styled.View`
  font-size: 12px;
  font-weight: 500;
  flex-direction: row;
  align-items: center;
  color: ${colors.gray700};
`;

export const BtnSide = styled.View`
  padding-vertical: 2px;
  background-color: #fff;
  justify-content: center;
  padding-horizontal: 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid ${colors.gray300};
`;

export const BtnSideText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.gray700};
`;
