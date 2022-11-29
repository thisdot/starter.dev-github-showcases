import { useParams } from '@solidjs/router';
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
  const [profile, setProfile] = createSignal({});
  const [userRepo, setRepos] = createSignal({});

  const [resp] = createResource(() =>
    userProfile({
      username: params?.login,
    })
  );

  const [repos] = createResource(() =>
    getUserRepos({
      username: params?.login,
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
      setRepos(repos());
    }
  });

  return (
    <Switch fallback={<div>Loading...</div>}>
      <Match when={!resp.loading && !repos.loading}>
        <ProfilePage user={profile()} repos={userRepo()} />
      </Match>
    </Switch>
  );
};

export default Profile;
