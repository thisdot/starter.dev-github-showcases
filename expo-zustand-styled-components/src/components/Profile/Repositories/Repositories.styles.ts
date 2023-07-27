import styled from 'styled-components/native';
import { breakpoints } from '../../../utils/breakpoints';

export const ContainerStyled = styled.View<{ screenWidth: number }>`
  flex: 1;
  width: 100%;
  height: 100%;
  ${({ screenWidth }) => {
    if (screenWidth > breakpoints.tablet) {
      return `
        padding-top: 10px;
      `;
    }
  }}
`;
