import { component$ } from '@builder.io/qwik';
import { formatDistance } from 'date-fns';
import { GitBranchIcon, StarIcon } from '../icons';

export interface RepoMetaProps {
  language?: string | null;
  languageColor?: string | null;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

export const RepoMeta = component$(
  ({ language, languageColor, stargazerCount, forkCount, updatedAt }: RepoMetaProps) => {
    return (
      <div className="flex mt-4 text-xs text-gray-600 space-x-1">
        {language && (
          <div data-testid="repository language">
            <span
              style={{
                backgroundColor: languageColor || '#ccc',
              }}
              className="w-3 h-3 inline-block rounded-full mr-1 relative top-0.5"
            />
            {language}
          </div>
        )}
        {(stargazerCount > 0 || forkCount > 0) && (
          <div className="space-x-4">
            {stargazerCount > 0 && (
              <span className="hover:cursor-pointer hover:text-blue-600" data-testid="repository star count">
                <StarIcon className="w-4 h-4 inline mb-0.5" /> {stargazerCount}
              </span>
            )}
            {forkCount > 0 && (
              <span className="hover:cursor-pointer hover:text-blue-600" data-testid="repository fork count">
                <GitBranchIcon className="w-4 h-4 inline mb-0.5" /> {forkCount}
              </span>
            )}
          </div>
        )}
        <div>
          Updated{' '}
          {formatDistance(new Date(updatedAt), Date.now(), {
            addSuffix: true,
          })}
        </div>
      </div>
    );
  }
);
