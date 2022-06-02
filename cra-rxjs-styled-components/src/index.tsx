import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AuthGuard from './components/AuthGuard';
import reportWebVitals from './reportWebVitals';
import Redirect from './routes/redirect';
import RepoDetails from './routes/repo-details';
import SignIn from './routes/sign-in';
import TopRepos from './routes/top-repos';
import RepoPullRequest from './routes/repository-pull-request';
import UserRepos from './components/user-repos';

ReactDOM.render(
  <React.StrictMode>
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
          <Route
            path="/:username/:repo"
            element={
              <AuthGuard>
                <RepoDetails />
              </AuthGuard>
            }
          />
         <Route
            path="/orgs/:username"
            element={
              <AuthGuard>
                <UserRepos isOrg />
              </AuthGuard>
            }
          />
        </Route>
        <Route
          path="pulls"
          element={
            <AuthGuard>
              <RepoPullRequest />
            </AuthGuard>
          }
        />
        <Route path="signin" element={<SignIn />} />
        <Route path="redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
