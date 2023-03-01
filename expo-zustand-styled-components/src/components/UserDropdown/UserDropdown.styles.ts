import styled from 'styled-components/native';

export const DropdownNav = styled.View`
	position: relative;
	top: 4px;
	display: inline-block;
	text-align: left;
`;

export const DropdownBtn = styled.TouchableOpacity`
	display: flex;
	align-items: centre;
	color: rgb(255 255 255 1);
	background-color: transparent;
	background-image: none;
	font-family: inherit;
	font-size: 100%;
	line-height: inherit;
	margin: 0;
	padding: 0;
	border: 2px solid rgb(255 255 255 1);
`;

export const UserDropdownAvatarContainer = styled.View`
	display: flex;
	align-items: centre;
	justify-content: center;
	overflow: hidden;
	border-radius: 9999px;
	background-color: rgb(75 85 99 1);
`;

export const UserDropdownAvatarSpan = styled.Text`
	box-sizing: border-box;
	display: inline-block;
	overflow: hidden;
	width: 32px;
	height: 32px;
	background: transparent;
	opacity: 1;
	border: 0;
	margin: 0px;
	padding: 0px;
	position: relative;
	max-width: 100%;
`;

export const UserDropdownAvatarImage = styled.Image`
	position: absolute;
	inset: 0px;
	box-sizing: border-box;
	padding: 0px;
	border: 0;
	margin: auto;
	display: block;
	width: 0px;
	height: 0px;
	min-width: 100%;
	max-width: 100%;
	min-height: 100%;
	max-height: 100%;
`;

export const UserDropdownMenuItems = styled.View`
	position: absolute;
	right: 0;
	z-index: 30;
	margin-top: 8px;
	width: 224px;
	transform-origin: top right;
	border-radius: 40px;
	background-color: rgb(255 255 255 1);
`;

export const UserDropdownMenuItemsPaddingDiv = styled.View`
	padding: 4px 0;
`;

export const UserDropdownMenuItemAnchorTag = styled.TouchableOpacity`
	& {
		display: block;
		padding: 8px 16px;
		font-weight: 400;
		color: rgb(17 24 39 1);
		text-decoration: none;
	}
`;

export const UserDropdownMenuItemSignoutBtn = styled.TouchableOpacity`
	display: block;
  padding: 8px 16px;
	font-weight: 500;
	color: rgb(17 24 39 1);
	text-decoration: none;
	border: 0;
	background-color: transparent;
	font-size: 16px;
`;

export const IconContainer = styled.View`
	width: 20px;
	height: 20px;
`;
