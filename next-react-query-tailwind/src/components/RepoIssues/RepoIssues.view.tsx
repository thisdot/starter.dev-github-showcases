import type { Issue } from './types';
import cn from 'classnames';
import {
  MinusCircleIcon,
  CheckCircleIcon,
  ChatAltIcon,
} from '@heroicons/react/outline';
import { formatDistance } from 'date-fns';
import styles from './RepoIssues.module.css';

interface RepoIssuesViewProps {
  issues: Issue[];
}

function RepoIssuesView({ issues }: RepoIssuesViewProps) {
  return (
    <>
      {issues.map((issue) => (
        <div key={issue.id} className={styles.issue} data-testid="issue">
          <div className={styles.container}>
            <div className="flex">
              <div>
                {issue.closed ? (
                  <CheckCircleIcon
                    className={cn(styles.stateIcon, 'text-purple-600')}
                  />
                ) : (
                  <MinusCircleIcon
                    className={cn(styles.stateIcon, 'text-green-600')}
                  />
                )}
              </div>
              <div>
                <div className={styles.content}>
                  <span className={styles.title} data-testid="issue title">
                    {issue.title}
                  </span>
                  <span className="inline">
                    {issue.labels.map(({ color, name }) => (
                      <span
                        key={color}
                        style={{
                          backgroundColor: `#${color}`,
                        }}
                        className={styles.label}
                        data-testid="issue label name"
                      >
                        {name}
                      </span>
                    ))}
                  </span>
                </div>
                <div className={styles.meta} data-testid="issue number">
                  #{issue.number}{' '}
                  {issue.closed === false && (
                    <span data-testid="issue created at">
                      opened{' '}
                      {formatDistance(new Date(), new Date(issue.createdAt))}{' '}
                      ago{' '}
                    </span>
                  )}
                  by{' '}
                  <span className={styles.link} data-testid="issue created by">
                    {issue.login}
                  </span>
                  {issue.closedAt && (
                    <span data-testid="issue closed at">
                      {' '}
                      was closed{' '}
                      {formatDistance(new Date(), new Date(issue.closedAt))} ago
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-1">
              <span
                className={styles.comments}
                data-testid="issue comment count"
              >
                <ChatAltIcon className={styles.commentsIcon} />
                {issue.commentCount}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RepoIssuesView;
