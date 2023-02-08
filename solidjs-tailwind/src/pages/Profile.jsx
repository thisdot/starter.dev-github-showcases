import { useParams, useLocation } from '@solidjs/router';
import {
  createEffect,
  createResource,
  createSignal,
  Match,
  Switch,
} from 'solid-js';
import { ProfilePage } from '../components/ProfilePage';
import userProfile from '../services/user-profile';
import getUserRepos from '../services/user-repos';

const Profile = () => {
  const params = useParams();
  const location = useLocation();
  const [profile, setProfile] = createSignal({});
  const [userReposInfo, setReposInfo] = createSignal({});

  const [resp] = createResource(() =>
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

  createEffect(() => {
    if (resp() && !resp.loading) {
      setProfile(resp());
    }
  });

  createEffect(() => {
    if (repos() && !repos.loading) {
      setReposInfo(repos());
    }
  });

  return (
    <Switch fallback={<div>Loading...</div>}>
      <Match when={!resp.loading && !repos.loading}>
        <ProfilePage user={profile()} reposInfo={userReposInfo()} />
      </Match>
    </Switch>
  );
};

export default Profile;
