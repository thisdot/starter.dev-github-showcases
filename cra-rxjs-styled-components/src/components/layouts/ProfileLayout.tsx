import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(243, 244, 246);
  display: grid;
  

  grid-template-columns: auto;
    grid-template-areas:
      'header'
      'content'
      'aside';
  }

  @media (min-width: 850px) {
    grid-template-columns: 384px auto;
    grid-template-areas: 'aside content';
    margin: 20px;
`;
