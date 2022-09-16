import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

function RepoCardSkeleton() {
	const Container = styled.div`
		padding-top: 2rem;
		padding-bottom: 2rem;
		border-bottom-width: 1px;
		border-color: rgb(229 231 235);
	`;

	return (
		<Container>
			<ContentLoader width={325} height={125} viewBox="0 0 325 125">
				<rect x="5" y="5" rx="5" ry="5" width="200" height="15" />
				<rect x="215" y="5" rx="5" ry="5" width="50" height="15" />
				<rect x="5" y="40" rx="5" ry="5" width="320" height="50" />
				<rect x="5" y="110" rx="5" ry="5" width="75" height="10" />
				<rect x="90" y="110" rx="5" ry="5" width="75" height="10" />
			</ContentLoader>
		</Container>
	);
}

export default RepoCardSkeleton;

// .container {
//  @apply border-b border-gray-200 first-of-type:border-t grid grid-cols-12 gap-x-4;
// padding-top: 2rem; /* 32px */
// padding-bottom: 2rem; /* 32px */
// border-bottom-width: 1px;
//border-color: rgb(229 231 235);
// display: grid
// gap
