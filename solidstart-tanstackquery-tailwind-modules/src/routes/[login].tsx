import { createQuery } from '@tanstack/solid-query';
import { createSignal, createEffect, Switch, Match } from 'solid-js';
import { useParams, useLocation } from 'solid-start';
import { LoadingPulseDot } from '~/components/LoadingPulseDot/LoadingPulseDot';
import { ProfilePage } from '~/components/ProfilePage';
import userProfile from '~/services/get-user-profile';
import getUserRepos from '~/services/get-user-repos';
import { Profile } from '~/types/user-profile-type';
import { PageInfo, Repo } from '~/types/user-repo-type';

type GetUserRepos = {
  pageInfo: PageInfo;
  repos: Repo[];
};

const UserProps = () => {
  const params = useParams();
  const location = useLocation();
  const [profile, setProfile] = createSignal<Profile>({
    avatarUrl: '',
    bio: '',
    company: '',
    username: '',
    followers: {
      totalCount: 0,
    },
    following: {
      totalCount: 0,
    },
    location: '',
    login: '',
    name: '',
    organizations: {
      nodes: [],
    },
    starredRepositories: {
      totalCount: 0,
    },
    twitterUsername: '',
    websiteUrl: '',
  });
  const [userReposInfo, setReposInfo] = createSignal<GetUserRepos>({
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: '',
      endCursor: '',
    },
    repos: [],
  });

  const queryProfile = createQuery(
    () => ['query-profile'],
    () =>
      userProfile({
        username: params?.login,
      })
  );

  const queryRepos = createQuery(
    () => [
      'query-repos',
      { after: location.query?.after, before: location.query?.before },
    ],
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
    if (queryProfile.isSuccess && queryProfile.data) {
      setProfile(queryProfile.data);
    }
  });

  createEffect(() => {
    if (queryRepos.isSuccess && queryRepos.data) {
      setReposInfo(queryRepos.data);
    }
  });

  return (
    <Switch fallback={<LoadingPulseDot />}>
      <Match when={queryProfile.isSuccess && queryRepos.isSuccess}>
        <ProfilePage user={profile()} reposInfo={userReposInfo()} />
      </Match>
    </Switch>
  );
};

export default UserProps;
