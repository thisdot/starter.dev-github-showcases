import { Route, Routes } from '@solidjs/router';
import { Home, OrgProfile, RedirectPage, SigninPage } from './pages';
import ROUTES from './routes';

function App() {
  return (
    <Routes>
      <Route component={Home} path={ROUTES.HOME} />
      <Route component={SigninPage} path={ROUTES.SIGNIN} />
      <Route component={RedirectPage} path={ROUTES.REDIRECT} />
      <Route component={OrgProfile} path={ROUTES.ORGPROFILE} />
    </Routes>
  );
}

export default App;
