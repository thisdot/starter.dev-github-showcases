import { Star } from '@styled-icons/heroicons-outline';
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
import { useUserRepositories } from '../../hooks/user-repositories/use-user-repositories';

function UserRepos({ isOrg = false }) {
  const { loading, repos } = useUserRepositories(isOrg);

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
