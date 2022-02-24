import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 384px auto;
  grid-template-areas:
    'aside content';

  @media(max-width: 850px){
    grid-template-columns: auto;
    grid-template-areas:
    'header'
    'content'
    'aside';
  }
`;
