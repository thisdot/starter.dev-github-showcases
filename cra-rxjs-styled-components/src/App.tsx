import { Outlet } from 'react-router';
import Header from './components/header';
import StateProvider from './context/StateProvider'

function App() {
  return (
    <StateProvider>
      <Header />
      <Outlet />
    </StateProvider>
  );
}

export default App;
