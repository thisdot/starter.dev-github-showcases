import { component$ } from '@builder.io/qwik';
import * as styles from './repo-read-me.className';

// Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const Empty = component$(() => {
  return (
    <div className={styles.emptyContainer} data-testid="readme empty">
      <div className={styles.emptyText}>
        Help people interested in this repository understand your project by adding a README.
      </div>
      <button className={styles.addReadmeBtn}>Add a README</button>
    </div>
  );
});
