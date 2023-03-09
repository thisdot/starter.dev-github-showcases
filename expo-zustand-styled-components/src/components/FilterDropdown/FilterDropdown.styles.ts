import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const Dropdown = styled.View<{ zIndex: number; screenWidth: number }>`
  z-index: ${({ zIndex }) => zIndex || '0'};
  flex: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '1' : 'none')};
`;

export const DropdownOptions = styled.View<{ show: boolean }>`
  position: absolute;
  right: 0;
  z-index: 3;
  elevation: 3;
  margin-top: 40px;
  border-radius: 8px;
  background-color: #fff;
  width: 224px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`;

export const DropdownOptionsHeading = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;
export const DropdownOptionsHeadingText = styled.Text`
  font-weight: 700;
  font-size: 14px;
`;

export const DropdownBtn = styled.TouchableOpacity<ScreenWidth>`
  flex-direction: row;
  justify-content: ${({ screenWidth }) =>
    screenWidth >= breakpoints.tablet ? 'center' : 'space-between'};
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid ${colors.gray300};
  border-radius: 8px;
  background-color: ${colors.gray100};
  min-width: 80px;
  elevation: 1;
`;

export const DropdownOption = styled.TouchableOpacity`
  flex-direction: row;
  padding: 8px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${colors.gray300};
  gap: 4px;
`;

export const DropdownBtnText = styled.Text`
  font-weight: 500;
  font-size: 14px;
`;
