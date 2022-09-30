import Header from '../../components/header';
import RepoPage from '../../components/repo-page';
import SubHeader from '../../components/sub-header';
import { Outlet, useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import { RepoLayout } from '../../components/layouts/RepoLayoutPage';

function Repo() {
	const { username, repo, branch } = useParams();
	const location = useLocation();

	const basePath: string = `${username}/${repo}`;
	var path: string = '';

	if (location.pathname.includes('/tree/')) {
		path = location.pathname.split(`${basePath}/tree/${branch}/`).pop()!;
	}

	if (location.pathname.includes('/blob/')) {
		path = location.pathname.split(`${basePath}/blob/${branch}/`).pop()!;
	}

	return (
		<>
			<Header />
			<RepoPage name={repo} owner={username} branch={branch} path={path}>
				<RepoLayout>
					<SubHeader />
					<Outlet />
				</RepoLayout>
			</RepoPage>
		</>
	);
}

export default Repo;
