import styled from 'styled-components';

export const DropdownNav = styled.nav`
	position: relative;
	top: 0.25rem;
	display: var(--inline-block);
	text-align: left;
`;

export const DropdownBtn = styled.button`
	display: var(--inline-flex);
	align-items: var(--align-items-center);
	color: rgb(255 255 255 / var(--tw-text-opacity-1));
	cursor: var(--cursor-pointer);
	background-color: var(--transparent-background);
	background-image: none;
	font-family: inherit;
	font-size: 100%;
	line-height: inherit;
	margin: 0;
	padding: 0;
	border: var(--border-none);
`;

export const UserDropdownAvatarContainer = styled.div`
	display: var(--flex);
	align-items: var(--align-items-center);
	justify-content: center;
	overflow: hidden;
	border-radius: 9999px;
	background-color: rgb(75 85 99 / var(--tw-bg-opacity));
`;

export const UserDropdownAvatarSpan = styled.span`
	box-sizing: var(--box-sizing-border-box);
	display: var(--inline-block);
	overflow: hidden;
	width: 32px;
	height: 32px;
	background: none;
	opacity: 1;
	border: var(--border-none);
	margin: 0px;
	padding: 0px;
	position: relative;
	max-width: 100%;
`;

export const UserDropdownAvatarImage = styled.img`
	position: absolute;
	inset: 0px;
	box-sizing: var(--box-sizing-border-box);
	padding: 0px;
	border: var(--border-none);
	margin: auto;
	display: var(--display-block);
	width: 0px;
	height: 0px;
	min-width: 100%;
	max-width: 100%;
	min-height: 100%;
	max-height: 100%;
`;

export const UserDropdownMenuItems = styled.div`
	position: absolute;
	right: 0;
	z-index: 50;
	margin-top: 0.5rem;
	width: 14rem;
	transform-origin: top right;
	border-radius: 0.375rem;
	background-color: rgb(255 255 255 / var(--tw-bg-opacity));
`;

export const UserDropdownMenuItemsPaddingDiv = styled.div`
	padding: 0.25rem 0;
`;

export const UserDropdownMenuItemAnchorTag = styled.a`
	& {
		display: var(--display-block);
		padding: 0.5rem 1rem;
		font-weight: 400;
		color: rgb(17 24 39 / var(--tw-text-opacity));
		text-decoration: none;
	}
	&:hover {
		color: var(--blue-600);
	}
`;

export const UserDropdownMenuItemSignoutBtn = styled.button`
	display: var(--display-block);
	padding: 0.5rem 1rem;
	font-weight: 500;
	color: rgb(17 24 39 / var(--tw-text-opacity-1));
	text-decoration: none;
	border: var(--border-none);
	background-color: var(--transparent-background);
	cursor: var(--cursor-pointer);
	font-size: 1rem;

	&:hover {
		color: var(--blue-600);
	}
`;

export const IconContainer = styled.div`
	width: 20px;
	height: 20px;
`;
