import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]';
import { BookOpenIcon } from '../icons/book-open.icon';
import { Description } from './description';
import { HomepageUrl } from './homepage-url';
import { Topics } from './topic';
import * as styles from './repo-about.className';

export const RepoAboutWidget = component$(() => {
  const store = useContext(RepoContext);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>About</h3>
      <div className={styles.description}>
        {store.info.isLoading ? (
          <div>Loading..</div>
        ) : (
          <div className="space-y-4">
            <Description text={store.info.data?.description} />
            <HomepageUrl homepageUrl={store.info.data?.homepageUrl} />
            <Topics topics={store.info.data?.topics} />
          </div>
        )}
      </div>
      <div>
        <a className={styles.readmeLink}>
          <BookOpenIcon className={styles.readmeIcon} /> Readme
        </a>
      </div>
    </div>
  );
});
