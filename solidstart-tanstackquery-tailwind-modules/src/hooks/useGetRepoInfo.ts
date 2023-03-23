import { CreateQueryResult, createQuery } from "@tanstack/solid-query";
import { Accessor, createEffect, createSignal } from 'solid-js';
import { useParams } from "solid-start";
import getRepoInfo from "~/services/get-repo-info";
import { Info } from "~/types/repo-info-type";

interface Result {
  branch: string;
  info: Info;
}
type Response = [
  Accessor<Info>,
  Accessor<string>,
  CreateQueryResult<Result, unknown>
];

const useGetRepoInfo = (): Response => {
  const params = useParams();
  const [branch, setBranch] = createSignal(params.branch);
  const [info, setInfo] = createSignal<Info>({
    isPrivate: false,
    visibility: '',
    forkCount: 0,
    description: '',
    homepageUrl: '',
    stargazerCount: 0,
    watcherCount: 0,
    openIssueCount: 0,
    topics: [],
    isOrg: false,
    openPullRequestCount: 0,
  });

  const isOwnerAndNameValid =
    typeof params.owner === 'string' && typeof params.name === 'string';

  const repoInfo = createQuery(
    () => [`repository-info_${params.owner}_${params.name}`],
    () =>
      getRepoInfo(
        isOwnerAndNameValid
          ? { owner: params.owner, name: params.name }
          : { owner: '', name: '' }
      )
  );

  createEffect(() => {
    if (repoInfo.isSuccess && !repoInfo.isLoading && repoInfo.data) {
      setInfo(repoInfo.data.info);
      setBranch(repoInfo.data.branch || params.branch);
    }
  });

  return [info, branch, repoInfo];
};


export default useGetRepoInfo;