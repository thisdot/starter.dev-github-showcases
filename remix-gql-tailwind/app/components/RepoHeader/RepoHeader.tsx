import RepoHeading from "../RepoHeading/RepoHeading";
import RepoActionButtons from "../RepoActionButtons/RepoActionButtons";
import TabNavigation from "../TabNavigation/TabNavigation";
import * as styles from "./RepoHeader.classNames";
import { createTabList } from "./tabList";
import { useRepo } from "../../context/RepoContext";

function RepoHeader() {
  const repo = useRepo();
  return (
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
        <RepoHeading />
        <RepoActionButtons />
      </div>
      <div className={styles.bottomRow}>
        <TabNavigation
          tabs={createTabList({
            issueCount: repo.data?.openIssueCount,
            pullRequestCount: repo.data?.openPullRequestCount,
          })}
          basePath={`${repo.owner}/${repo.name}`}
          pathname={repo.pathname}
        />
      </div>
    </div>
  );
}

export default RepoHeader;
