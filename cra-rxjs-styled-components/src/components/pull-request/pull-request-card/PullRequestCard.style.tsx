import styled, { css } from 'styled-components';
import colors from '../../../constants/colors';

const flex = css`
	display: flex;
	align-items: center;
`;
export const PullRequestCardWrapper = styled.div`
  ${flex};
  padding: 15px 20px;
  border-bottom: 1px solid ${colors.gray300};
  justify-content: space-between;
  & > .left {
    ${flex};
    & > .icon {
      font-size: 1.1rem;
      margin-right: 0.8rem;
      align-self: start;
      color: ${colors.green800};
      &.merged {
        color: ${colors.purple500};
      }
      &.closed {
        color: ${colors.red600};
      }
    }
    & > .info {
      ${flex};
      flex-direction: column;
      align-items: start;
      & > .heading {
        font-weight: 600 !important
        font-size: 16px !important;
        vertical-align: middle !important;
        color: ${colors.gray800};
        margin-bottom: 0.8rem;
        &:hover {
          color: ${colors.blue800};
        }
      }
      & > .sub_heading {
        color: ${colors.gray600};
        font-size: 12px !important;
        & > *:not(:last-child) {
          margin-inline: 0.2rem;
        }
      }
    }
  }

  & > .right {
    .message {
       ${flex};
       & .icon {
         font-size: 1.1rem;
         margin-right: 5px;
       }
      flex-direction: row;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.gray600};
    &:hover {
      color: ${colors.blue800};
    }
  }
  svg {
    color: ${colors.gray600};
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
    &:hover {
      color: ${colors.blue800};
    }
  }


`;
