import styles from './RepoReadMe.module.css';

export const Empty = () => {
  return (
    <div class={styles.emptyContainer} data-testid="readme empty">
      <div class={styles.emptyText}>
        Help people interested in this repository understand your project by adding a README.
      </div>
      <button class={styles.addReadmeBtn}>Add a README</button>
    </div>
  );
}
