import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const Badge = styled.View`
  border-radius: 14px;
  border-width: 1px;
  border-color: ${colors.gray300};
  padding-vertical: 1px;
  padding-horizontal: 6px;
  justify-content: center
  align-items: center;
`;

export const BadgeText = styled.Text<ScreenWidth>`
  color: ${colors.gray600};
  font-size: ${({screenWidth}) => screenWidth >= breakpoints.tablet ? '14px' : '12px'};
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
`;
