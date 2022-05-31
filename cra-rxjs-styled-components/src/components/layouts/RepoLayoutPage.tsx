import styled from 'styled-components';

export const RepoLayout = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RepoMain = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 1rem;
`;
