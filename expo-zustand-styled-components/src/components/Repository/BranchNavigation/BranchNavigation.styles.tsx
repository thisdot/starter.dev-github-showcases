import styled from 'styled-components/native';
import { breakpoints } from '../../../utils/breakpoints';
import { colors } from '../../../utils/style-variables';

type ScreenWidth = {
  screenWidth: number;
};

export const NavViewContainer = styled.View<ScreenWidth>`
  gap: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 10 : 4)}px;
  align-items: ${({ screenWidth }) =>
    screenWidth >= breakpoints.tablet ? 'center' : 'flex-start'};
  flex-direction: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 'row' : 'column')};
`;

export const ButtonStyled = styled.View`
  gap: 4px;
  border-radius: 8px;
  border-width: 0.5px;
	flex-direction: row;
	align-items: center;
  padding-vertical: 8px;
  padding-horizontal: 10px;
  justify-content: space-between;
  border-color: ${colors.gray400}
	background-color: ${colors.gray100};
`;

export const ButtonTextStyled = styled.Text`
  color: #000;
  font-size: 16px;
  text-align: center;
`;

export const CrumbsContainer = styled.View`
  gap: 4px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const RootLink = styled.Text<ScreenWidth>`
  font-weight: 600;
  color: ${colors.blue600};
  font-size: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 18 : 14)}px;
`;

export const CrumbLink = styled.Text<ScreenWidth>`
  color: ${colors.blue600};
  font-size: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 18 : 14)}px;
`;

export const CrumbEnd = styled.Text<ScreenWidth>`
  font-weight: 600;
  font-size: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 18 : 14)}px;
`;
