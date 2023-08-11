import colors from '../../constants/colors';
import styled from 'styled-components';


export const DropdownContainer = styled.div`
	display: flex;
	position: relative;
	gap: 8px;
	height: 35px;
	flex-grow: 1;
	margin-right: 8px;
`;

export const DropdownOptionsHeading = styled.div`
	display: flex;
	padding: 8px;
	flex-direction: row;
	justify-content: space-between;
`;

export const DropdownOptionsHeadingText = styled.span`
	font-size: 12px;
	font-weight: 700;
`;

export const DropdownBtn = styled.button`
	display: flex;
	flex-grow: 1;
	border-radius: 8px;
	align-items: center;
	padding: 8px;
	justify-content: space-between;
	border: 1px solid ${colors.gray300};
	background-color: ${colors.gray100};
	gap: 4px;
	min-width: 70px;
	outline: none;
	@media (min-width: 768px) {
		gap: 8px;
		min-width: 80px;
	}
`;

export const DropdownOption = styled.li`
	display: flex;
	gap: 4px;
	padding: 8px;
	flex-direction: row;
	border-top-width: 1px;
	background-color: #fff;
	border-top-style: solid;
	border-top-color: ${colors.gray300};
`;

export const DropdownBtnText = styled.span`
	font-size: 14px;
	font-weight: 500;
`;

export const DropDownMenu = styled.div`
	position: absolute;
	right: 0px;
	z-index: 10;
	margin-top: 0.5rem;
	width: 14rem;
	transform-origin: top right;
	border-radius: 0.375rem;
	background-color: #FFF;
	box-shadow: 0px 0px 10px 1px #CCC;
	top: 2rem;
`;

export const MenuItemContainer = styled.div`
	padding: 0.25rem 0;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	transition-delay: 50ms;
	cursor: pointer;
	border-top: 1px solid ${colors.gray200};
`;

export const MenuItem = styled.span`
	color: ${colors.gray700};
	padding: 0.5rem 1rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

export const NotSelected = styled.span`
	margin-right: 1rem;
`;

export const MenuItemContent = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const MenuItemContentColor = styled.span`
	width: 1rem;
	height: 1rem;
	border-radius: 0.5rem;
	flex-shrink: 0;
	border: 1px solid ${colors.gray300};

`;

export const CloseWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.875rem;
  line-height: 1.25rem;
	padding: 0.25rem 0.75rem;
`;

export const CloseBtn = styled.button`
	outline: none;
	border: none;
	background-color: transparent;
	height: 1rem;
	font-size: 1rem;
	cursor: pointer;
`;

export const CloseText = styled.strong`
	text-transform: capitalize;
	font-size: 0.75rem;
	line-height: 1rem;
`;

