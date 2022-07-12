import styles from './RepoReadMe.module.css';

function Empty() {
  return (
    <div className={styles.emptyContainer} data-testid="readme empty">
      <div className={styles.emptyText}>
        Help people interested in this repository understand your project by
        adding a README.
      </div>
      <button className={styles.addReadmeBtn}>Add a README</button>
    </div>
  );
}

export default Empty;
