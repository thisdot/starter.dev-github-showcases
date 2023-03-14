import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const Dropdown = styled.View<{ zIndex: number; screenWidth: number }>`
  gap: 8px;
`;

export const DropdownOptions = styled.View<{ show: boolean }>`
  position: absolute;
  right: 0;
  width: 224px;
  margin-top: 40px;
  border: 1px solid ${colors.gray300};
  elevation: 3;
  border-radius: 8px;
  background-color: #ffffff;
  display: ${({ show }) => (show ? 'flex' : 'none')};
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
  elevation: 1;
  border-radius: 8px;
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
