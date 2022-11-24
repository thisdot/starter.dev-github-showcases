import { Route, Routes } from '@solidjs/router';
import AuthGuard from './components/AuthGuard/AuthGuard';
import { Home, OrgProfile, RedirectPage, SigninPage } from './pages';
import ROUTES from './routes';

function App() {
  return (
    <Routes>
      <Route component={Home} path={ROUTES.HOME} />
      <Route component={RedirectPage} path={ROUTES.REDIRECT} />
      <Route component={OrgProfile} path={ROUTES.ORGPROFILE} />
      <Route component={SigninPage} path={ROUTES.SIGNIN} />
    </Routes>
  );
}

export default App;
