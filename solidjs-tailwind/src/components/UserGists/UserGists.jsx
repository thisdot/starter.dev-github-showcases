import { Link } from '@solidjs/router';
import { For } from 'solid-js';
import Container from './Container';
import styles from './UserGists.module.css';

const UserGists = (props) => {  
  return (
    <Container>
      <div class="mt-3">
        {props.gists.length > 0 ? (
          <For each={props.gists}>
            {(gist) => (
              <div class="my-1" data-testid='gist-item'>
                <Link href={gist.url} class={styles.link} target="_blank">
                  {gist.name}
                </Link>
              </div>
            )}
          </For>
        ) : (
          <p class={styles.error}>User does not have any gists</p>
        )}
      </div>
    </Container>
  );
};

export default UserGists;
