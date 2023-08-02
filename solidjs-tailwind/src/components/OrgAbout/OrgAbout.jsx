import styles from './OrgAbout.module.css';

const OrgAbout = (props) => {
  return (
    <div class="flex items-center my-2">
      <img
        src={props.avatarUrl}
        height="30"
        width="30"
        alt="Org Avatar"
        class={styles.avatar}
        data-testid="org about avatar"
      />
      <span class={styles.name} data-testid="org about name">
        {props.name}
      </span>
    </div>
  );
};

export default OrgAbout;
