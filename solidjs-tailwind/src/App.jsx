import { Route, Routes } from '@solidjs/router';
import { AuthGuard } from './components/AuthGuard';
import { Home, OrgProfile, RedirectPage, SigninPage, Profile } from './pages';
import ROUTES from './routes';

function App() {
  return (
   <>
      <Routes>
        <Route component={SigninPage} path={ROUTES.SIGNIN} />
        <Route component={RedirectPage} path={ROUTES.REDIRECT} />
        <Route component={AuthGuard} path="/" >
          <Route component={Home} path={ROUTES.HOME} />
          <Route component={Profile} path={ROUTES.PROFILE} />
          <Route component={OrgProfile} path={ROUTES.ORGPROFILE} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
