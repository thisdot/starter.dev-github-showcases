import styled from 'styled-components';

export const Layout = styled.div`
	height: calc(100% - 70px);
	padding: 0 1rem;
	background-color: rgb(255, 255, 255);
	display: grid;
	overflow: hidden;
	grid-template-columns: auto;
	grid-template-areas:
		'header'
		'aside'
		'content'
		'footer';

	@media (min-width: 850px) {
		grid-template-columns: 384px auto;
		grid-template-areas: 'aside content' 'footer footer';
		margin: 20px;
		height: calc(100% - 110px);
	}
`;

export const NetlifyBadgeContainer = styled.div`
	grid-area: footer;
	margin-top: auto;
	text-align: center;
	background-color: white;
`;

export const ProfileNav = styled.div`
	background-color: #fff;
	padding-top: 40px;
`;
