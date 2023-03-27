import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';

export const Containter = styled.View<{ screenWidth: number }>`
  gap: 10px;
  flex-grow: 1;
  ${({ screenWidth }) => {
    if (screenWidth >= breakpoints.tablet) {
      return `flex: 0.75`;
    }
  }}
`;
