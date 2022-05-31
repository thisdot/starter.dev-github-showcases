import styled from 'styled-components';
import colors from '../../../constants/colors';

export const Wrapper = styled.div`
  margin-inline: auto;
  margin-top: 16px;
  max-width: 60rem;
`;

export const Content = styled.div`
  border: 1px solid ${colors.gray300};
  border-radius: 6px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;

  & > span {
    min-width: 32px;
    padding: 5px 10px;
    font-style: normal;
    line-height: 20px;
    color: ${colors.gray800};
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  }

  & .disabled {
    color: ${colors.gray400};
    cursor: default;
    border-color: transparent;
  }

  & > .prev {
    position: relative;
    &::before {
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: text-bottom;
      content: '';
      background-color: currentColor;
      margin-right: 4px;
      -webkit-clip-path: polygon(
        9.8px 12.8px,
        8.7px 12.8px,
        4.5px 8.5px,
        4.5px 7.5px,
        8.7px 3.2px,
        9.8px 4.3px,
        6.1px 8px,
        9.8px 11.7px,
        9.8px 12.8px
      );
      clip-path: polygon(
        9.8px 12.8px,
        8.7px 12.8px,
        4.5px 8.5px,
        4.5px 7.5px,
        8.7px 3.2px,
        9.8px 4.3px,
        6.1px 8px,
        9.8px 11.7px,
        9.8px 12.8px
      );
    }
  }

  & > .next {
    position: relative;
    &::after {
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: text-bottom;
      content: '';
      background-color: currentColor;
      margin-left: 4px;
      -webkit-clip-path: polygon(
        6.2px 3.2px,
        7.3px 3.2px,
        11.5px 7.5px,
        11.5px 8.5px,
        7.3px 12.8px,
        6.2px 11.7px,
        9.9px 8px,
        6.2px 4.3px,
        6.2px 3.2px
      );
      clip-path: polygon(
        6.2px 3.2px,
        7.3px 3.2px,
        11.5px 7.5px,
        11.5px 8.5px,
        7.3px 12.8px,
        6.2px 11.7px,
        9.9px 8px,
        6.2px 4.3px,
        6.2px 3.2px
      );
    }
  }
`;
