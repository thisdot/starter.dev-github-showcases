import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { BranchNavigation } from '~/components/branch-navigation';
import { FileViewer } from '~/components/file-viewer';
import { RepoHeader } from '~/components/repo-header';
import { SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX } from '~/utils/constants';

export default component$(() => {
  const { path, name, owner, branch } = useLocation().params;
  const { prCount, forkCount, issuesCount, watcherCount, stargazerCount } = useLocation().query;

  const _name = name.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');
  const _path = path.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');
  const _owner = owner.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');
  const _branch = branch.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');

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
      <div className="max-w-screen-2xl mx-auto md:py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <BranchNavigation name={_name} path={_path} owner={_owner} branch={_branch} />
            <FileViewer name={_name} path={_path} owner={_owner} branch={_branch} />
          </div>
        </div>
      </div>
    </div>
  );
});
