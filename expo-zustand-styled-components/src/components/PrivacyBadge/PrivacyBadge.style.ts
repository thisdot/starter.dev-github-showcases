import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const Badge = styled.View`
  border-width: 1px;
  border-radius: 14px;
  align-items: center;
  padding-vertical: 1px;
  justify-content: center;
  padding-horizontal: 6px;
  border-color: ${colors.gray300};
`;

export const BadgeText = styled.Text<ScreenWidth>`
  font-weight: 600;
  text-align: center;
  color: ${colors.gray600};
  text-transform: capitalize;
  font-size: ${({screenWidth}) => screenWidth >= breakpoints.tablet ? '14px' : '12px'};
`;
