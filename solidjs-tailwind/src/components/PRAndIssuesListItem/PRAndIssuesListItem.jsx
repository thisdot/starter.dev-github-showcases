import { splitProps } from 'solid-js';
import { format } from 'date-fns';
import cn from 'classnames';

const PRAndIssuesListItem = (props) => {
    const [local] = splitProps(props, [
      'number',
      'title',
      'url',
      'isOpen',
      'isMerged',
      'isResolved',
      'isDraft',
      'createdAt',
      'authorName',
      'commentsCount',
      'labels'
    ]);

  
    return (
      <div class="flex relative items-baseline border-y border-gray-300 pt-2 pb-3">
      <div class="flex">
        <label class="flex-shrink-0 pl-3 hidden md:block">
          <input type="checkbox" name="issues[]" autoComplete="off" />
        </label>

        <div class="flex-shrink-0 pl-4">
          {/* <span class={iconColor}>
            {type == 'issue' ? (
              data.isOpen ? (
                <IssuesIcon class="w-5 h-5" />
              ) : (
                <>
                  {data.isResolved ? (
                    <ResolvedIssueIcon class="w-5 h-5" />
                  ) : (
                    <ClosedIssueIcon class="w-5 h-5" />
                  )}
                </>
              )
            ) : data.isOpen ? (
              <>{data.isDraft ? <DraftPrIcon class="w-5 h-5" /> : <PullRequestIcon class="w-5 h-5" />}</>
            ) : (
              <>{data.isMerged ? <MergedPrIcon class="w-5 h-5" /> : <ClosedPrIcon class="w-5 h-5" />}</>
            )}
          </span> */}
        </div>
      </div>

      <div class="flex-auto min-width-0 pr-3 pl-2">
        <div>
          <a class="align-middle no-underline markdown-title font-semibold" target="_blank" href={local.url}>
            {local.title}
          </a>
          {local.labels?.map((label) => (
            <span
              
              class={cn('mt-2 ml-2 py-1 px-2 rounded-full text-sm', `bg-[#${label.color}]`)}
              style={{ "background-color": `#${label.color}` }}
            >
              {label.name}
            </span>
          ))}
        </div>
        <div class="flex mt-1 text-sm text-gray-500">
          <span class="opened-by">
            #{local.number}
            {' by '}
            <a href="#">{local.authorName}</a> was {local.isOpen ? 'opened' : 'closed'} on{' '}
            {format(new Date(local.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
      </div>

      <div class="flex-shrink-0 w-1/5 text-right pr-3 flex-nowrap flex">
        <span class="ml-2 pt-1 flex-1 flex-shrink-0">
          {local.commentsCount > 0 && (
            <a href="#" class="">
              <div class="flex items-center justify-end">
                {/* <CommentIcon class="w-5 h-5" /> */}
                <span class="ml-1 text-sm font-bold">{local.commentsCount}</span>
              </div>
            </a>
          )}
        </span>
      </div>
    </div>
    );
  };
  
  export default PRAndIssuesListItem;