import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 384px auto;
  grid-template-areas:
    'header header'
    'aside content';

  @media screen and (max-width: 425px) {
    grid-template-columns: auto;
    grid-template-areas:
      'header'
      'content'
      'aside';
  }
`;
