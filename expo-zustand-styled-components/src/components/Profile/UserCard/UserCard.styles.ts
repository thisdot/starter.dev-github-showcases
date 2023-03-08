import { Platform } from 'react-native';
import styled from 'styled-components/native';
type ScreenWidth = {
  screenWidth: number | undefined;
};

export const UserProfileCardWrapper = styled.View<ScreenWidth>`
  flex-grow: 0;
  display: flex;
  margin-top: ${Platform.OS === 'web' ? -20 : 0}px;
  width: ${({ screenWidth }) => (screenWidth >= 768 ? '33.3%' : '100%')};
`;

export const UserDetails = styled.View<ScreenWidth>`
  gap: 8px;
  flex-direction: ${({ screenWidth }) => (screenWidth >= 768 ? 'column' : 'row')};
  align-items: ${({ screenWidth }) => (screenWidth >= 768 ? 'flex-start' : 'center')};
`;

export const Avatar = styled.Image<ScreenWidth>`
  border-radius: 260px;
  width: ${({ screenWidth }) => (screenWidth >= 768 ? '260px' : '80px')};
  height: ${({ screenWidth }) => (screenWidth >= 768 ? '260px' : '80px')};
`;

export const NameContainer = styled.View`
  margin-top: 8px;
`;

export const Name = styled.Text<ScreenWidth>`
  font-size: ${({ screenWidth }) => (screenWidth >= 768 ? '24px' : '16px')};
  color: rgb(31, 41, 55);
  font-weight: 700;
`;

export const Username = styled.Text<ScreenWidth>`
  font-size: ${({ screenWidth }) => (screenWidth >= 768 ? '20px' : '14px')};
  color: rgb(107, 114, 128);
  font-weight: 300;
`;

export const Bio = styled.Text`
  color: rgb(31, 41, 55);
  margin-top: 16px;
`;

export const FieldWrapper = styled.View`
  margin-bottom: 4px;
  flex-direction: row;
  align-items: center;
`;

export const Field = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: rgb(31, 41, 55);
  margin-left: 8px;
`;

export const SpanCount = styled.Text`
  flex-direction: row;
  align-items: center;
`;

export const Count = styled.Text`
  font-weight: 500;
  color: rgb(17, 24, 39);
`;

export const SpaceSpan = styled.Text`
  margin-left: 4px;
  margin-right: 4px;
`;

export const Socials = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;
