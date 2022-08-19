import styled from 'styled-components';

export const RepoLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const RepoContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1536px;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 2rem;
`;

export const RepoMain = styled.div`
  grid-column: span 12 / span 12;
  @media (min-width: 768px) {
    grid-column: span 7 / span 7;
  }
  @media (min-width: 1280px) {
    grid-column: span 9 / span 9;
  }
`;

export const RepoAside = styled.div`
  grid-column: span 12 / span 12;
  @media (min-width: 768px) {
    grid-column: span 5 / span 5;
  }
  @media (min-width: 1280px) {
    grid-column: span 3 / span 3;
  }
`;

export const RepoCenterWrapper = styled.div`
  margin-inline: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  max-width: 80rem;
`;
