import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tap } from 'rxjs';
import { ORG_REPO_LIST } from '../../constants/url.constants';
import { fromFetchWithAuth } from '../../hooks/auth/from-fetch-with-auth';
import { Star } from '@styled-icons/heroicons-outline';
import { Repo } from './types';
import {
  Aside,
  BadgeWrapper,
  Containers,
  Content,
  Description,
  Header,
  HeadingLink,
  RepoListWrapper,
  StarBtn,
  StarIcon,
} from './UserRepos.styles';
import RepoMeta from '../repo-meta';
import PrivacyBadge from '../misc/Privacy-badge';

function UserRepos({ isOrg = false }) {
  const [repos, setRepos] = useState<Repo[]>();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const GITHUB_URL = isOrg ? ORG_REPO_LIST(params.username!) : ''; // The empty string can be replaced with URL to get all User Repos.

  const request = (url: string) =>
    fromFetchWithAuth(url, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  useEffect(() => {
    request(GITHUB_URL)
      .pipe(
        tap((val) => {
          if (val) {
            setRepos(val);
            setLoading(false);
          }
        })
      )
      .subscribe();
  }, [GITHUB_URL, params.username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <RepoListWrapper>
      {repos &&
        repos.map(
          ({
            id,
            name,
            owner,
            description,
            stargazers_count,
            forks_count,
            language,
            updated_at,
            visibility,
          }) => (
            <Containers key={id}>
              <Content>
                <Header>
                  <HeadingLink to={`/${owner.login}/${name}`}>
                    {name}
                  </HeadingLink>
                  <BadgeWrapper>
                    <PrivacyBadge visibility={visibility} />
                  </BadgeWrapper>
                </Header>
                <Description>{description}</Description>
                <RepoMeta
                  language={language}
                  forkCount={forks_count}
                  stargazerCount={stargazers_count}
                  updatedAt={updated_at}
                />
              </Content>
              <Aside>
                <StarBtn>
                  <StarIcon>
                    <Star />
                  </StarIcon>
                  Star
                </StarBtn>
              </Aside>
            </Containers>
          )
        )}
    </RepoListWrapper>
  );
}

export default UserRepos;
