import styled from 'styled-components';

export const RepoListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	box-sizing: border-box;
	max-width: 1024px;
	margin: 0 auto;
	padding: 2rem 1rem 0 1rem;
`;

export const NetlifyBadgeContainer = styled.div`
	margin-top: auto;
	padding-top: 2rem;
	padding-bottom: 1rem;
	text-align: center;
	background-color: white;
`;

export const OrgHeader = styled.div`
	border-bottom: 1px solid var(--gray-300);
	background-color: var(--gray-100);
	position: sticky;
	top: 0px;
	z-index: 40;
`;

export const OrgTopHeader = styled.div`
	padding: 0 32px;
`;

export const OrgAbout = styled.div`
	display: flex;
	align-items: center;
	padding-top: 1rem;
	margin-bottom: 2rem;
`;

export const OrgImage = styled.img`
	border-radius: 0.25rem;
	width: 2rem;
	height: 2rem;
	border-width: 1px;
`;
export const OrgName = styled.span`
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 700;
	margin-left: 0.5rem;
	color: var(--gray-700);
`;
