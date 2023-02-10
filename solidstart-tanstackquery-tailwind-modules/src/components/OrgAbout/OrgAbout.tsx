import styles from './OrgAbout.module.css';

interface OrgAboutProps {
  name: string;
  avatarUrl: string;
}

const OrgAbout = (props: OrgAboutProps) => {
  return (
    <div class="flex items-center my-2">
      <img
        src={props.avatarUrl}
        alt="Org Avatar"
        class={styles.logo}
        data-testid="org about avatar"
      />
      <span class={styles.name} data-testid="org about name">
        {props.name}
      </span>
    </div>
  );
};

export default OrgAbout;
