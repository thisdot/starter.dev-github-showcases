import ContentLoader from 'react-content-loader';

function DescriptionLoading() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={20}
      viewBox="0 0 400 20"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="3" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  );
}

export default DescriptionLoading;
