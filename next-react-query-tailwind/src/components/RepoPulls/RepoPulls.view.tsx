import type { PullRequest } from './types';
import cn from 'classnames';
import { ChatAltIcon } from '@heroicons/react/outline';
import { formatDistance } from 'date-fns';
import {
  PullRequestIcon,
  MergedPullRequestIcon,
  ClosedPullRequestIcon,
} from '@components/Icons';
import styles from '@components/RepoIssues/RepoIssues.module.css';

interface RepoPullsViewProps {
  pullRequests: PullRequest[];
}

function RepoPullsView({ pullRequests }: RepoPullsViewProps) {
  return (
    <div data-testid="repo pull requests">
      {pullRequests.map((pullRequest) => {
        let icon = (
          <PullRequestIcon className={cn(styles.stateIcon, 'text-green-600')} />
        );
        if (pullRequest.merged) {
          icon = (
            <MergedPullRequestIcon
              className={cn(styles.stateIcon, 'text-purple-600')}
            />
          );
        } else if (pullRequest.closed) {
          icon = (
            <ClosedPullRequestIcon
              className={cn(styles.stateIcon, 'text-red-600')}
            />
          );
        }
        return (
          <div key={pullRequest.id} className={styles.issue} data-testid="pr">
            <div className={styles.container}>
              <div className="flex">
                <div>{icon}</div>
                <div>
                  <div className={styles.content}>
                    <span
                      className={styles.title}
                      data-testid="pull request title"
                    >
                      {pullRequest.title}
                    </span>
                    <span className="inline">
                      {pullRequest.labels.map(({ color, name }) => (
                        <span
                          key={color}
                          style={{
                            backgroundColor: `#${color}`,
                          }}
                          className={styles.label}
                          data-testid="pull request label name"
                        >
                          {name}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div
                    className={styles.meta}
                    data-testid="pull request number"
                  >
                    #{pullRequest.number}{' '}
                    {pullRequest.closed === false && (
                      <span data-testid="pull request created at">
                        opened{' '}
                        {formatDistance(
                          new Date(),
                          new Date(pullRequest.createdAt)
                        )}{' '}
                        ago{' '}
                      </span>
                    )}
                    by{' '}
                    <span
                      className={styles.link}
                      data-testid="pull request created by"
                    >
                      {pullRequest.login}
                    </span>
                    {pullRequest.closedAt && (
                      <span data-testid="pull request closed at">
                        {' '}
                        was {pullRequest.merged ? 'merged' : 'closed'}{' '}
                        {formatDistance(
                          new Date(),
                          new Date(pullRequest.closedAt)
                        )}{' '}
                        ago
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <span
                  className={styles.comments}
                  data-testid="pull request comment count"
                >
                  <ChatAltIcon className={styles.commentsIcon} />
                  {pullRequest.commentCount}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RepoPullsView;
