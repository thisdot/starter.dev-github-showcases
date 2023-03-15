import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const DropdownContainer = styled.View`
  gap: 8px;
  height: 35px;
  flex-grow: 1;
  margin-right: 8px;
`;

export const DropdownOptionsHeading = styled.View`
  padding: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DropdownOptionsHeadingText = styled.Text`
  font-weight: 700;
  font-size: 14px;
`;

export const DropdownBtn = styled.TouchableOpacity<ScreenWidth>`
  flex-grow: 1;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  padding-vertical: 8px;
  padding-horizontal: 8px;
  justify-content: space-between;
  border: 1px solid ${colors.gray300};
  background-color: ${colors.gray100};
  gap: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 8 : 4)}px;
  min-width: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '80px' : '70px')};
`;

export const DropdownOption = styled.TouchableOpacity`
  gap: 4px;
  padding: 8px;
  flex-direction: row;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${colors.gray300};
  background-color: #ffffff;
`;

export const DropdownBtnText = styled.Text`
  font-weight: 500;
  font-size: 14px;
`;
