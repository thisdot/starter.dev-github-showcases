import ContentLoader from 'react-content-loader';

function LoadingBulletList() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={28}
      viewBox="-10 5 400 28"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="10" cy="20" r="8" />
      <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  );
}

export default LoadingBulletList;
