import { Route, Routes } from '@solidjs/router';
import { Home, RedirectPage, SigninPage, Profile } from './pages';
import ROUTES from './routes';

function App() {
  return (
    <Routes>
      <Route component={Home} path={ROUTES.HOME} />
      <Route component={SigninPage} path={ROUTES.SIGNIN} />
      <Route component={RedirectPage} path={ROUTES.REDIRECT} />
      <Route component={Profile} path={ROUTES.PROFILE} />
    </Routes>
  );
}

export default App;
