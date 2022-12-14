import { BookOpenIcon } from '../Icons';
import { Description } from './Description';
import { HomepageUrl } from './HomePageUrl';
import { Topics } from './Topics';
import styles from './RepoAbout.module.css';
import { useRepo } from '../../contexts/RepoContext';

export const RepoAboutWidget = () => {
  const {info} = useRepo();

  return (
    <div class={styles.container}>
      <h3 class={styles.heading}>About</h3>
      <div class={styles.description}>
        <div data-testid="about-info" class="space-y-4">
          <Description text={info().info?.description} />
          <HomepageUrl homepageUrl={info().info?.homepageUrl} />
          <Topics topics={info().info?.topics || []} />
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

export default RepoAboutWidget;
