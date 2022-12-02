import { BookOpenIcon } from '../Icons';
import { Description } from './Description';
import { HomepageUrl } from './HomePageUrl';
import { Topics } from './Topics';
import styles from './RepoAbout.module.css';

export const RepoAboutWidget = (props) => {
  return (
    <div class={styles.container}>
      <h3 class={styles.heading}>About</h3>
      <div class={styles.description}>
        <div data-testid="about-info" class="space-y-4">
          <Description text={props.info.data?.description} />
          <HomepageUrl homepageUrl={props.info.data?.homepageUrl} />
          <Topics topics={props.info.data?.topics} />
        </div>
      </div>
      <div>
        <a class={styles.readmeLink}>
          <BookOpenIcon class={styles.readmeIcon} /> Readme
        </a>
      </div>
    </div>
  );
}
