import { Route, Routes } from '@solidjs/router';
import { AuthGuard } from './components/AuthGuard';
import ROUTES from './routes';
import { Header } from './components/Header';
import Home from './pages/Home';
import SigninPage from './pages/Signin';
import RedirectPage from './pages/Redirect';
import Profile from './pages/Profile';
import OrgProfile from './pages/OrgProfile';

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
