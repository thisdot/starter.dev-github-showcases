import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { PRIssueContextProvider } from '~/components/pull-request-issue-tab/pr-issue-context-provider';
import PullRequestsTabView from '~/components/repo-pulls';

export default component$(() => {
  const { name, owner } = useLocation().params;

  return (
    <div className="md:py-12 max-w-screen-xl mx-auto">
      <PRIssueContextProvider activeTab="open">
        <PullRequestsTabView activeTab="open" owner={owner} name={name} />
      </PRIssueContextProvider>
    </div>
  );
});
