import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AuthGuard from './components/AuthGuard';
import reportWebVitals from './reportWebVitals';
import Redirect from './routes/redirect';
import SignIn from './routes/sign-in';
import TopRepos from './routes/user-top-repos';
import RepoPullRequest from './routes/repo/repository-pull-request';
import RepoIssues from './routes/repo/repository-issues';
import Repo from './routes/repo';
import UserRepos from './components/user-repos';
import UserProfile from './routes/profile';
import RepoBranchRoot from './routes/repo/repository-code';
import RepoBranchTreePath from './routes/repo/repository-code/repository-tree/repository-tree';
import RepoBranchBlobPath from './routes/repo/repository-code/repository-blob/repository-blob';
import { UserProvider } from './context/UserProvider';

ReactDOM.render(
	<React.StrictMode>
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
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
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
