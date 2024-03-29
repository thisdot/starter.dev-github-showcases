import { breakpoints } from '../../../utils/breakpoints';

import styled from 'styled-components/native';
type ScreenWidth = {
  screenWidth: number;
};

export const UserProfileCardWrapper = styled.View<ScreenWidth>`
  ${({ screenWidth }) => {
    if (screenWidth >= breakpoints.tablet) {
      return `
        z-index: unset
      `;
    }
  }}
  width: ${({ screenWidth }) => (screenWidth > breakpoints.laptop ? 33.3 : 100)}%;
  margin-top: ${({ screenWidth }) => (screenWidth > breakpoints.laptop ? -80 : 0)}px;
  padding-right: ${({ screenWidth }) => (screenWidth > breakpoints.laptop ? 2.5 : 0)}%;
`;

export const UserDetails = styled.View<ScreenWidth>`
  gap: 8px;
  ${({ screenWidth }) => {
    if (screenWidth >= breakpoints.tablet) {
      return `
        z-index: unset
      `;
    }
  }}
  padding: 16px;
  flex-direction: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 'column' : 'row')};
  align-items: ${({ screenWidth }) =>
    screenWidth >= breakpoints.tablet ? 'flex-start' : 'center'};
`;

export const Avatar = styled.Image<ScreenWidth>`
  z-index: 999;
  width: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '260px' : '80px')};
  height: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '260px' : '80px')};
  border-radius: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '260px' : '80px')};
`;

export const NameContainer = styled.View`
  margin-top: 8px;
`;

export const Name = styled.Text<ScreenWidth>`
  font-size: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '24px' : '16px')};
  color: rgb(31, 41, 55);
  font-weight: 700;
`;

export const Username = styled.Text<ScreenWidth>`
  font-size: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '20px' : '14px')};
  color: rgb(107, 114, 128);
  font-weight: 300;
`;

export const Bio = styled.Text`
  color: rgb(31, 41, 55);
  padding-horizontal: 16px;
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
  padding-left: 16px;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;
