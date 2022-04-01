import ContentLoader from 'react-content-loader';

function LoadingProfile() {
  return (
    <ContentLoader
      width={260}
      height={480}
      viewBox="0 0 260 480"
      className="relative z-30"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="5" y="280" rx="5" ry="5" width="180" height="10" />
      <rect x="5" y="300" rx="5" ry="5" width="125" height="10" />
      <rect x="5" y="335" rx="5" ry="5" width="260" height="30" />
      <rect x="5" y="390" rx="5" ry="5" width="225" height="8" />
      <rect x="5" y="430" rx="5" ry="5" width="225" height="10" />
      <rect x="5" y="450" rx="5" ry="5" width="225" height="10" />
      <rect x="5" y="470" rx="5" ry="5" width="225" height="10" />
    </ContentLoader>
  );
}

export default LoadingProfile;
