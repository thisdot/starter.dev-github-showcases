import { Outlet } from 'react-router';
import styled from 'styled-components';
import Header from './components/layouts/Header';
import { Layout } from './components/layouts/Layout';
import Sidebar from './components/layouts/Sidebar';

const Main = styled.main`
  background-color: rgb(243, 244, 246);
  padding: 3rem;
  min-height: calc(100vh - 70px);
`;

function App() {
  return (
    <Layout>
      <Header></Header>
      <Sidebar></Sidebar>
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
}

export default App;
