import * as styles from "./RepoReadMe.classNames";

function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <div className={styles.emptyText}>
        Help people interested in this repository understand your project by
        adding a README.
      </div>
      <button className={styles.addReadmeBtn}>Add a README</button>
    </div>
  );
}

export default Empty;
