import { BookOpenIcon } from '../Icons';
import { Description } from './Description';
import { HomepageUrl } from './HomePageUrl';
import { Topics } from './Topics';

import styles from './RepoAbout.module.css';

interface Props {
  description?: string;
  homepageUrl?: string;
  topics?: string[];
}

export const RepoAboutWidget = (props: Props) => {
  return (
    <div class={styles.container}>
      <h3 class={styles.heading}>About</h3>
      <div class={styles.description}>
        <div data-testid="about-info" class="space-y-4">
          <Description text={props.description} />
          <HomepageUrl homepageUrl={props.homepageUrl} />
          <Topics topics={props.topics} />
        </div>
      </div>
      <div>
        <span class={styles.readmeLink}>
          <BookOpenIcon class={styles.readmeIcon} /> Readme
        </span>
      </div>
    </div>
  );
};

export default RepoAboutWidget;
