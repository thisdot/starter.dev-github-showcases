import styles from './UserGists.module.css';

function Container(props) {
  return (
    <div class={styles.container}>
      <h3 class="font-semibold">Gists</h3>
      {props.children}
    </div>
  );
}

export default Container;
