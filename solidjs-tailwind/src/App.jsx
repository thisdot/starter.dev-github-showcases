import { Route, Routes } from '@solidjs/router';
import { AuthGuard } from './components/AuthGuard';
import { Home, OrgProfile, RedirectPage, SigninPage, Profile } from './pages';
import ROUTES from './routes';

function App() {
  return (
    <Routes>
      <Route component={SigninPage} path={ROUTES.SIGNIN} />
      <Route component={RedirectPage} path={ROUTES.REDIRECT} />
      <AuthGuard>
        <Route component={Profile} path={ROUTES.PROFILE} />
        <Route component={Home} path={ROUTES.HOME} />
        <Route component={OrgProfile} path={ROUTES.ORGPROFILE} />
      </AuthGuard>
    </Routes>
  );
}

export default App;
