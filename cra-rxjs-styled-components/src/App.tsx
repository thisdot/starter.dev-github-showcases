import { Outlet } from 'react-router';
import Header from './components/layouts/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
