import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthGuard from './components/AuthGuard';
import Redirect from './routes/redirect';
import SignIn from './routes/sign-in';
import TopRepos from './routes/user-top-repos';
import RepoPullRequest from './routes/repo/repository-pull-request';
import RepoIssues from './routes/repo/repository-issues';
import Repo from './routes/repo';
import UserRepos from './components/user-repos/UserRepos';
import UserProfile from './routes/profile';
import RepoBranchRoot from './routes/repo/repository-code';
import RepoBranchTreePath from './routes/repo/repository-code/repository-tree/repository-tree';
import RepoBranchBlobPath from './routes/repo/repository-code/repository-blob/repository-blob';
import { UserProvider } from './context/UserProvider';
import Index from './routes/Index';

function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />}>
						<Route
							path=""
							element={
								<AuthGuard>
									<TopRepos />
								</AuthGuard>
							}
						/>
					</Route>
					<Route
						path="/orgs/:username"
						element={
							<AuthGuard>
								<UserRepos isOrg />
							</AuthGuard>
						}
					/>
					<Route
						path="/:username/:repo"
						element={
							<AuthGuard>
								<Repo />
							</AuthGuard>
						}
					>
						<Route path="" element={<RepoBranchRoot />} />
						<Route path="tree/:branch/*" element={<RepoBranchTreePath />} />
						<Route path="blob/:branch/*" element={<RepoBranchBlobPath />} />
						<Route path="issues" element={<RepoIssues />} />
						<Route path="pull-requests" element={<RepoPullRequest />} />
					</Route>
					<Route
						path="/:username"
						element={
							<AuthGuard>
								<UserProfile />
							</AuthGuard>
						}
					></Route>
					<Route path="signin" element={<SignIn />} />
					<Route path="redirect" element={<Redirect />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
