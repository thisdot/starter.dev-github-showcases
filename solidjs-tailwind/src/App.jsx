import { Route, Routes } from '@solidjs/router';
import { Home, RedirectPage, SigninPage } from './pages';
import ROUTES from './routes';

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
