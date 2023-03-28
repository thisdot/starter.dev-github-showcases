import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';
import { colors } from '../../utils/style-variables';

export const DropdownWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ProfileImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${colors.gray300};
`;

export const UserMenu = styled.View<{ screenWidth: number }>`
  top: 54px;
  right: 0;
  z-index: 999;
  display: flex;
  position: absolute;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex-direction: column;
  background-color: #fff;
  width: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? 220 : 160)}px;
`;

export const ListItem = styled.TouchableOpacity<{ screenWidth: number }>`
  width: 100%;
  z-index: 999;
  display: flex;
  margin-bottom: 1px;
  align-items: center;
  flex-direction: row;
  padding: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? 16 : 10)}px;
`;

export const ProfileImageWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ArrowImage = styled.Image`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;
