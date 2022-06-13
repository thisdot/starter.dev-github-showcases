import styled from 'styled-components';
import colors from '../../constants/colors';

export const PaginationContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .group {
    position: relative;
    z-index: 0;
    display: inline-flex;
  }

  .button {
    cursor: pointer;
    position: relative;
    display: inline-flex;
    border-width: 1px;
    --tw-bg-opacity: 1;
    background-color: rgba(243, 244, 246, 1);
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    font-weight: 500 !important;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
    color: rgba(59, 130, 246, 1);
    transition-property: background-color, border-color, color, fill, stroke;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    border-style: solid;
    border-color: rgba(229, 231, 235, 1);

    &:first-child {
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }

    &:last-child {
      border-top-right-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;
      border-left-width: 0px;
    }

    &:hover {
      background-color: rgba(37, 99, 235, 1);
      color: rgba(255, 255, 255, 1);
    }

    &:disabled {
      color: rgba(191, 219, 254, 1);

      &:hover {
        background-color: rgba(243, 244, 246, 1);
      }
    }
  }
`;
