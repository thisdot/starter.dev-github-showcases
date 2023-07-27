import styles from './OrgAbout.module.css';

const Skeleton = () => {
  return (
    <div class={styles.loading}>
      <div class={styles.avatar} />
      <div class={styles.line} />
    </div>
  );
};

export default Skeleton;
