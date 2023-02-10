import { BookOpenIcon } from '../Icons';
import { Description } from './Description';
import { HomepageUrl } from './HomePageUrl';
import { Topics } from './Topics';
import { aboutData } from './data';

import styles from './RepoAbout.module.css';

export const RepoAboutWidget = () => {
  return (
    <div class={styles.container}>
      <h3 class={styles.heading}>About</h3>
      <div class={styles.description}>
        <div data-testid="about-info" class="space-y-4">
          <Description text={aboutData.info.data.description} />
          <HomepageUrl homepageUrl={aboutData.info.data.homepageUrl} />
          <Topics topics={aboutData.info.data.topics || []} />
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
