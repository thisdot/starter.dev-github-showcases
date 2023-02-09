interface ProfileNavProps {
  pathname: string;
  class?: string;
  isOrg?: boolean;
}

const ProfileNav = (props: ProfileNavProps) => {
  return (
    <div class={props.class}>
      <span>Here should place the TabNavigation</span>
    </div>
  );
};

export default ProfileNav;
