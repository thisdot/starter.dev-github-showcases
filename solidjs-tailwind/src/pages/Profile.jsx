import { useLocation, useParams } from '@solidjs/router';
import { createResource, Show } from 'solid-js';
import { ProfilePage } from '../components/ProfilePage';
import userProfile from '../services/user-profile';
import getUserRepos from '../services/user-repos';

const Profile = () => {
  const params = useParams();
  const location = useLocation();

  const [profile] = createResource(() =>
    userProfile({
      username: params?.login,
    })
  );

  const [repos] = createResource(
    () => `${location.query?.after}_${location.query?.before}`,
    () =>
      getUserRepos({
        username: params?.login,
        afterCursor: location.query?.after,
        beforeCursor: location.query?.before,
        first: 10,
      })
  );

  return (
    <Show
      when={!profile.loading && !repos.loading}
      fallback={<div>Loading...</div>}
    >
      <ProfilePage user={profile()} reposInfo={repos()} />
    </Show>
  );
};

export default Profile;
