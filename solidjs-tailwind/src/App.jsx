import { Route, Routes } from '@solidjs/router';
import { Home, SigninPage } from './pages';
import ROUTES from './routes';

function App() {
  return (
    <Routes>
      <Route component={Home} path={ROUTES.HOME} />
      <Route component={SigninPage} path={ROUTES.SIGNIN} />
    </Routes>
  );
}

export default App;
