import { Route, Routes } from '@solidjs/router';
import { AuthGuard } from './components/AuthGuard';
import ROUTES from './routes';
import Home from './pages/Home';
import SigninPage from './pages/Signin';
import RedirectPage from './pages/Redirect';
import Profile from './pages/Profile';
import OrgProfile from './pages/OrgProfile';

function App() {
  return (
    <>
      <Routes>
        <Route component={SigninPage} path={ROUTES.SIGNIN} />
        <Route component={RedirectPage} path={ROUTES.REDIRECT} />
        <Route component={AuthGuard} path="/">
          <Route component={Home} path={ROUTES.HOME} />
          <Route component={Profile} path={ROUTES.PROFILE} />
          <Route component={OrgProfile} path={ROUTES.ORGPROFILE} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
