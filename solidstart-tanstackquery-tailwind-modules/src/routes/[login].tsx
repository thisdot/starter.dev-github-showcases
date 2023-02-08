import { createQuery } from '@tanstack/solid-query';
import { createSignal, createEffect, Switch, Match } from 'solid-js';
import { useParams, useLocation } from 'solid-start';
import { ProfilePage } from '~/components/ProfilePage';
import userProfile from '~/services/get-user-profile';
import getUserRepos from '~/services/get-user-repos';
import { UserProfile } from '~/types/user-profile-type';
import { PageInfo, UserRepo } from '~/types/user-repo-type';

type GetUserRepos = {
  pageInfo: PageInfo;
  repos: UserRepo[];
};

const Profile = () => {
  const params = useParams();
  const location = useLocation();
  const [profile, setProfile] = createSignal<UserProfile>();
  const [userReposInfo, setReposInfo] = createSignal<GetUserRepos>();

  const queryProfile = createQuery(
    () => [params.login],
    () =>
      userProfile({
        username: params?.login,
      })
  );

  const queryRepos = createQuery(
    () => [{ username: params.login}],
    () =>
      getUserRepos({
        username: params?.login,
        afterCursor: location.query?.after,
        beforeCursor: location.query?.before,
        orderBy: {
          direction: 'DESC',
          field: 'UPDATED_AT',
        },
        first: 10,
      })
  );

  createEffect(() => {
    if (queryProfile.isSuccess) {
      setProfile(queryProfile.data);
    }
  });

  createEffect(() => {
    if (queryRepos.isSuccess) {
      setReposInfo(queryRepos.data);
    }
  });

  return (
    <Switch fallback={<div>Loading...</div>}>
      <Match when={queryProfile.isSuccess && queryRepos.isSuccess}>
        <ProfilePage user={profile()} reposInfo={userReposInfo()} />
      </Match>
    </Switch>
  );
};

export default Profile;
