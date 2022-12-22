import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { IssueTabView } from '~/components/issue-tab-view/issue-tab-view';
import { PRIssueContextProvider } from '~/components/pull-request-issue-tab/pr-issue-context-provider';

export default component$(() => {
  const { name, owner } = useLocation().params;

  return (
    <div class="md:py-12 max-w-screen-xl mx-auto">
      <PRIssueContextProvider activeTab="open">
        <IssueTabView activeTab="open" name={name} owner={owner} />
      </PRIssueContextProvider>
    </div>
  );
});
