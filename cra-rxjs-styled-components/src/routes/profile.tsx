import UserProfileView from '../components/user-profile';
import { Layout } from '../components/layouts/ProfileLayout';
import Header from '../components/header';

function Profile() {
	return (
		<>
			<Header />
			<Layout>
				<UserProfileView />
			</Layout>
		</>
	);
}

export default Profile;
