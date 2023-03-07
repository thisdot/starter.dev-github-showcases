import styled from 'styled-components/native';

export const DropdownWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ProfileImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const UserMenu = styled.View`
  position: absolute;
  top: 54px;
  right: 0;
  width: 220px;
  border: 1px solid black;
  border-radius: 8px,
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  z-index: 999;
`;

export const ListItem = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  z-index: 999;
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
