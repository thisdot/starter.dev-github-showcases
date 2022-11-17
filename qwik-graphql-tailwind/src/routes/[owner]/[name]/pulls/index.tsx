import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { PRIssueContextProvider } from '~/components/pull-request-issue-tab/pr-issue-context-provider';
import { RepoHeader } from '~/components/repo-header';
import RepoPulls from '~/components/repo-pulls';
import { SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX } from '~/utils/constants';

export default component$(() => {
  const { name, owner } = useLocation().params;
  const { forkCount, watcherCount, stargazerCount } = useLocation().query;

  const _name = name.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');
  const _owner = owner.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');

  return (
    <div class="bg-white h-screen">
      <RepoHeader
        name={_name}
        owner={_owner}
        forkCount={forkCount || 0}
        watcherCount={watcherCount || 0}
        stargazerCount={stargazerCount || 0}
      />
      <div className="md:py-12 max-w-screen-xl mx-auto">
        <PRIssueContextProvider activeTab="open">
          <RepoPulls activeTab="open" />
        </PRIssueContextProvider>
      </div>
    </div>
  );
});