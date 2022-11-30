import { Outlet, useLocation } from 'react-router';
import { NetlifyBadgeContainer, RepoLayout } from '../../components/layouts/RepoLayoutPage';
import Header from '../../components/header/Header';
import SubHeader from '../../components/sub-header/SubHeader';
import RepoPage from '../../components/repo-page/RepoPage.data';
import { useParams } from 'react-router-dom';

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
					<NetlifyBadgeContainer>
						<a
							target="_blank"
							rel="noreferrer noopener"
							href="https://www.netlify.com"
						>
							<img
								src="https://www.netlify.com/v3/img/components/netlify-light.svg"
								alt="Deploys by Netlify"
							/>
						</a>
					</NetlifyBadgeContainer>
				</RepoLayout>
			</RepoPage>
		</>
	);
}

export default Repo;
