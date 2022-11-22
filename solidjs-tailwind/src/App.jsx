import { Route, Routes } from '@solidjs/router';
import ROUTES from './routes';
import { Header } from './components/Header';
import Home from './pages/Home';
import SigninPage from './pages/Signin';
import RedirectPage from './pages/Redirect';

function App() {
  return (
    <>
      <Header user={{ login: 'SDaian' }} />
      <Routes>
        <Route component={Home} path={ROUTES.HOME} />
        <Route component={SigninPage} path={ROUTES.SIGNIN} />
        <Route component={RedirectPage} path={ROUTES.REDIRECT} />
      </Routes>
    </>
  );
}

export default App;
