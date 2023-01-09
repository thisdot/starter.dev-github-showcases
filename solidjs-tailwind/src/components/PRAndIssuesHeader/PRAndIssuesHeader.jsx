import cn from 'classnames';
import {CheckIcon, PullRequestIcon, IssuesIcon } from '../Icons';
import { useLocation } from '@solidjs/router';

const PRAndIssuesHeader = (props) => {
  const { pathname } = useLocation();
  const type = pathname.includes('pulls') ? 'pr' : 'issue'

  return (
    <div class="flex flex-wrap space-x-1 space-y-2 md:space-x-0 md:space-y-0 items-center justify-between p-4 bg-gray-100 border-b rounded-t-lg">
      <div class="flex space-x-4">
        <button class={cn('text-xs flex items-center gap-1 text-gray-600', {
          'font-semibold text-gray-900': props.tabActive === 'open',
        })} 
          onClick={() => props.setActiveTab('open')}
        >
          {type === 'pr' ? <PullRequestIcon class='w-4 h-4' /> : <IssuesIcon class='w-4 h-4' />}
          <span>{props.openCount}</span>
          Open
        </button>
        <button class={cn('text-xs flex items-center gap-1 text-gray-600', {
            'font-semibold text-gray-900': props.tabActive === 'closed',
          })} 
          onClick={() => props.setActiveTab('closed')}
        >
          <CheckIcon class='w-4 h-4' />
          <span>{props.closedCount}</span>
          Closed
        </button>
      </div>
      <div class="flex items-center space-x-8" />
    </div>
  );
}

export default PRAndIssuesHeader