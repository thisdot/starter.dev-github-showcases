import {
	OrgAbout,
	OrgHeader,
	OrgImage,
	OrgName,
	OrgTopHeader,
} from '../components/user-repos/UserRepos.styles';
import Header from '../components/header/Header';
import UserRepos from '../components/user-repos/UserRepos';
import { ORG_INFO } from '../constants/url.constants';
import { fromFetchWithAuth } from '../hooks/auth/from-fetch-with-auth';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tap } from 'rxjs';
import { IOrg } from '../interfaces/org.interface';
import { LoadingBulletList } from '../components/Loading';
import { tabs } from '../constants/data';
import TabNavigation from '../components/tab-nav/TabNav';
import { RepoFilterProvider } from '../context/RepoFilterContext';

export default function OrgPage() {
	const [loading, setLoading] = useState(true);
	const [orgInfo, setOrgInfo] = useState<IOrg>();
	const { username } = useParams();

	const request = (url: string) =>
		fromFetchWithAuth(url, {
			selector: (response: Response) => {
				return response.json();
			},
		});

	useEffect(() => {
		if (!username) {
			return;
		}
		const GITHUB_URL = ORG_INFO(username);
		const subscription = request(GITHUB_URL)
			.pipe(
				tap((data) => {
					if (data) {
						setOrgInfo(data);
						setLoading(false);
					}
				})
			)
			.subscribe();
		return () => {
			subscription.unsubscribe();
		};
	}, [username]);

	return (
		<>
			<Header />
			<OrgHeader>
				<OrgTopHeader>
					{loading && <LoadingBulletList />}
					{orgInfo && (
						<OrgAbout>
							<OrgImage
								src={orgInfo.avatar_url}
								alt="Org Avatar"
								data-testid="org about avatar"
							/>
							<OrgName data-testid="org about name">{orgInfo.name}</OrgName>
						</OrgAbout>
					)}
					<TabNavigation tabs={tabs} activeTab={tabs[0].title} />
				</OrgTopHeader>
			</OrgHeader>
			<RepoFilterProvider>
				<UserRepos isOrg />
			</RepoFilterProvider>
		</>
	);
}
