import styled from 'styled-components';
export const ReadmeContainer = styled.div`
  margin: 1rem 0;
  border-radius: 0.375rem;
  border: 1px solid rgb(209 213 219 / var(--tw-border-opacity));
`;

export const ReadmeHeader = styled.header`
  z-index: 30;
  border-bottom: 1px solid rgba(209 213 219 / var(--tw-border-opacity));
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding: 0.625rem;
`;

export const ReadmeDiv = styled.div`
  padding: 1.5rem 2.5rem;
`;

export const ReadmeIconContainer = styled.span`
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.375rem;

  &:hover {
    background-color: var(--gray-100);
  }
`;

export const ReadmeText = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
`;
