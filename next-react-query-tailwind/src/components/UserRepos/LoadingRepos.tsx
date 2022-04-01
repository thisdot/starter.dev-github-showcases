import ContentLoader from 'react-content-loader';
import styles from './UserRepos.module.css';

function LoadingRepos() {
  return (
    <div className={styles.container}>
      <ContentLoader width={325} height={125} viewBox="0 0 325 125">
        <rect x="5" y="5" rx="5" ry="5" width="200" height="15" />
        <rect x="215" y="5" rx="5" ry="5" width="50" height="15" />
        <rect x="5" y="40" rx="5" ry="5" width="320" height="50" />
        <rect x="5" y="110" rx="5" ry="5" width="75" height="10" />
        <rect x="90" y="110" rx="5" ry="5" width="75" height="10" />
      </ContentLoader>
    </div>
  );
}

export default LoadingRepos;
