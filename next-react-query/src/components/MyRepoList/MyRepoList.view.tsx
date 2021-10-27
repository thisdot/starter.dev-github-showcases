import type { Repository } from '@lib/github';
import Link from 'next/link';

interface MyRepoListViewProps {
  repositories: Repository[];
}

function MyRepoListView({ repositories }: MyRepoListViewProps) {
  if (repositories.length < 1) {
    return <div>No repositories found</div>;
  }

  return (
    <div>
      <h3 className="my-2 text-xl font-medium">Repositories</h3>
      <div>
        {repositories.map(({ id, name, owner }) => (
          <div className="my-1" key={id}>
            <Link href={`${owner.login}/${name}`}>
              <a>
                {owner.login} / {name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRepoListView;
