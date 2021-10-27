import type { User } from '../types/github';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { request, gql } from 'graphql-request';

const USER_REPO_QUERIES = gql`
  {
    viewer {
      repositories(first: 100) {
        nodes {
          name
          url
          owner {
            login
          }
        }
      }
    }
  }
`;

export function RepoList() {
  const { data } = useQuery<{ viewer: User }, Error>(
    'repos',
    async () => {
      const res = await request('/api/graphql', USER_REPO_QUERIES);
      return res;
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <ul>
      {data?.viewer.repositories.nodes?.map((repo) => (
        <li key={repo?.url}>
          <Link href={repo?.url}>
            <a target="_blank">{repo?.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
