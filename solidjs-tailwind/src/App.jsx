import { Route, Routes } from '@solidjs/router';
import { AuthGuard } from './components/AuthGuard';
import ROUTES from './routes';
import Home from './pages/Home';
import SigninPage from './pages/Signin';
import RedirectPage from './pages/Redirect';
import Profile from './pages/Profile';
import OrgProfile from './pages/OrgProfile';
import RepoDetails from './pages/RepoDetails';
// import RepoBlob from './pages/RepoBlob';
import RepoTree from './pages/RepoTree';
import PullReqAndIssues from './pages/PullReqAndIssues';
import { Repo } from './components/Repo';

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
          <Route component={Repo} path={ROUTES.REPO_DETAILS}>
            <Route component={RepoDetails} path={'/'}  />
            <Route component={RepoTree} path={ROUTES.REPO_TREE} />
            {/* <Route component={RepoBlob} path={ROUTES.REPO_BLOB} /> */}
            <Route component={PullReqAndIssues} path={ROUTES.REPO_PULLS} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
