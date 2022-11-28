import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { PRIssueContextProvider } from '~/components/pull-request-issue-tab/pr-issue-context-provider';
import { RepoHeader } from '~/components/repo-header';
import PullRequestsTabView from '~/components/repo-pulls';
import { SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX } from '~/utils/constants';

export default component$(() => {
  const { name, owner } = useLocation().params;
  const { prCount, forkCount, issuesCount, watcherCount, stargazerCount } = useLocation().query;

  const _name = name.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');
  const _owner = owner.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');

  return (
    <div class="bg-white h-screen">
      <RepoHeader
        name={_name}
        owner={_owner}
        prCount={prCount}
        forkCount={forkCount}
        issuesCount={issuesCount}
        watcherCount={watcherCount}
        stargazerCount={stargazerCount}
      />
      <div className="md:py-12 max-w-screen-xl mx-auto">
        <PRIssueContextProvider activeTab="open">
          <PullRequestsTabView activeTab="open" owner={owner} name={name} />
        </PRIssueContextProvider>
      </div>
    </div>
  );
});
