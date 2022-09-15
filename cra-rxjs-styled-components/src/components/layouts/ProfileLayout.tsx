import styled from 'styled-components';

export const Layout = styled.div`
  height: 100%;
	padding: 0 1rem;
  background-color: rgb(255, 255, 255);
  display: grid;
	overflow: hidden;

  grid-template-columns: auto;
    grid-template-areas:
      'header'
      'aside'
      'content';
  }

  @media (min-width: 850px) {
    grid-template-columns: 384px auto;
    grid-template-areas: 'aside content';
    margin: 20px;
`;
