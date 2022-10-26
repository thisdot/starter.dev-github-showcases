import { Route, Routes } from '@solidjs/router';
import { Home, SigninPage } from './pages';
import ROUTES from './routes';

function App() {
  return (
    <div class="text-center">
      <Routes>
        <Route component={Home} path={ROUTES.HOME} />
        <Route component={SigninPage} path={ROUTES.SIGNIN} />
      </Routes>
    </div>
  );
}

export default App;
