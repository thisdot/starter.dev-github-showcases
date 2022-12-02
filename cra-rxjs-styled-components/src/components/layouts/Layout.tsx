import styled from 'styled-components';

export const Layout = styled.div`
	width: 100%;
	height: calc(100% - 70px);
	background-color: rgb(243, 244, 246);
	display: grid;
	grid-template-columns: 384px auto;
	grid-template-areas:
		'aside content'
		'footer footer';

	@media (max-width: 850px) {
		grid-template-columns: auto;
		grid-template-areas:
			'header'
			'content'
			'aside'
			'footer';
	}
`;
