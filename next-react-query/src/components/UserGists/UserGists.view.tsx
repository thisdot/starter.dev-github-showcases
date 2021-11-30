import type { GistItem } from './types';
import Link from 'next/link';

interface UserGistsProps {
  gists?: GistItem[];
}

function UserGistsView({ gists = [] }: UserGistsProps) {
  return (
    <div className="py-8 border-t border-b">
      <h3 className="font-semibold">Gists</h3>
      <div className="mt-3">
        {gists.map((gist) => (
          <div key={gist.id} className="my-1">
            <Link href={gist.url}>
              <a
                className="text-sm hover:text-blue-500 hover:underline"
                target="_blank"
              >
                {gist.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserGistsView;
