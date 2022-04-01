import styled from 'styled-components';

export const FileExplorerWrapper = styled.div`
  margin: 1rem;
`;

export const FileExplorerButtonNav = styled.nav`
  margin: 4.5rem 0 1.5rem;
  display: var(--flex);
  align-items: var(--align-items-center);
`;

export const FileExplorerButton = styled.button`
  position: relative;
  display: var(--inline-flex);
  align-items: var(--align-items-center);
  border-radius: 0.375rem;
  border: 1px solid rgb(209 213 219 / var(--tw-border-opacity));
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  padding: 0.4rem 0.7rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray-800);
  cursor: var(--cursor-pointer);

  &:hover {
    background-color: var(--gray-100);
  }
`;

export const FileExplorerButtonCaretIcon = styled.span`
  font-size: 10px;
  margin-left: 0.375rem;
  margin-top: 0.125rem;
  color: rgb(75 85 99 / var(--tw-text-opacity-1));
`;

export const FileExplorerIconDiv = styled.div`
  margin-right: 0.25rem;
  height: 1.25rem;
  width: 1.25rem;
  color: rgb(75 85 99 / var(--tw-text-opacity-1));
`;

export const FileExplorerContainer = styled.div`
  border-radius: 0.25rem;
  border: 1px solid rgb(209 213 219 / var(--tw-border-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const FileExplorerCell = styled.div`
  border: 1px solid rgb(209 213 219 / var(--tw-border-opacity));
  padding: 0.5rem 1rem;

  &:hover {
    background-color: var(--gray-100);
  }
`;

export const FileExplorerInnerCell = styled.div`
  display: var(--flex);
  align-items: var(--align-items-center);
`;

export const FileExplorerDirContainer = styled.div`
  margin-right: 0.625rem;
  height: 1.25rem;
  width: 1.25rem;
  color: rgb(96 165 250 / var(--tw-text-opacity-1));
`;

export const FileExplorerLink = styled.a`
  color: #000;
  text-decoration: none;
  cursor: var(--cursor-pointer);

  &:hover {
    color: var(--blue-600);
  }
`;

export const FileExplorerFileContainer = styled.div`
  margin-right: 0.625rem;
  height: 1.25rem;
  width: 1.25rem;
  color: rgb(107 114 128 / var(--tw-text-opacity));
`;
