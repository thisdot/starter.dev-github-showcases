import { BookOpenIcon } from '@heroicons/react/outline';
import { useRepo } from '@context/RepoContext';
import Description from './Description';
import DescriptionLoading from './DescriptionLoading';
import styles from './RepoAboutWidget.module.css';

function RepoAboutWidget() {
  const { data, isRepoLoading } = useRepo();
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>About</h3>
      <div className={styles.description}>
        {isRepoLoading ? (
          <DescriptionLoading />
        ) : (
          <Description text={data?.description} />
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
