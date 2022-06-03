import { BookOpenIcon } from '@heroicons/react/outline';
import { useRepo } from '@context/RepoContext';
import Description from './Description';
import HomepageUrl from './HomepageUrl';
import Topics from './Topics';
import { LoadingTextLine } from '@components/Loading';
import styles from './RepoAboutWidget.module.css';

function RepoAboutWidget() {
  const { data, isRepoLoading } = useRepo();
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>About</h3>
      <div className={styles.description}>
        {isRepoLoading ? (
          <LoadingTextLine />
        ) : (
          <div className="space-y-4">
            <Description text={data?.description} />
            <HomepageUrl homepageUrl={data?.homepageUrl} />
            <Topics topics={data?.topics} />
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
}

export default RepoAboutWidget;
