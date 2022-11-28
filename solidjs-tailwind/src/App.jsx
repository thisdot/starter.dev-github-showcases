import { Route, Routes } from '@solidjs/router';
import { Header } from './components';
import { AuthGuard } from './components/AuthGuard';
import { Home, OrgProfile, RedirectPage, SigninPage, Profile } from './pages';
import ROUTES from './routes';

function App() {
  return (
   <>
      <Header />
      <Routes>
        <Route component={SigninPage} path={ROUTES.SIGNIN} />
        <AuthGuard>
          <Route component={RedirectPage} path={ROUTES.REDIRECT} />
          <Route component={Home} path={ROUTES.HOME} />
          <Route component={Profile} path={ROUTES.PROFILE} />
          <Route component={OrgProfile} path={ROUTES.ORGPROFILE} />
        </AuthGuard>
      </Routes>
    </>
  );
}

export default App;
