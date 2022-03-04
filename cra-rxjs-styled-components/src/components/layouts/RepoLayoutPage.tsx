import styled from 'styled-components';

export const RepoLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 70px auto;
  grid-template-areas:
    'header header'
    'main aside'
    'readme readme';

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RepoHeader = styled.div`
  grid-area: header;
`;

export const RepoAside = styled.div`
  grid-area: aside;
`;

export const RepoReadme = styled.div`
  grid-area: readme;
`;
