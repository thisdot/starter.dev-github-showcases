import colors from '../../constants/colors';
import styled from 'styled-components';

export const Container = styled.div`
	background-color: white;
`;

export const RepoFilterWrapper = styled.div`
	display: flex;
	gap: 10px;
	width: 100%;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${colors.gray300};
	flex-direction: column;
	padding: 16px 0px;
	@media (min-width: 1024px) {
		flex-direction: row;
		padding: 10px 0px;
	}
`;

export const FiltersWrapper = styled.div`
	display: flex;
	width: 100%;
	flex: 0.45;
	@media (min-width: 1024px) && (max-width: 1440px) {
		flex: 0.6;
	}
`;

export const SearchTextInput = styled.input`
	font-size: 16px;
	padding: 8px 12px;
	border-radius: 8px;
	background-color: #fff;
	color: ${colors.gray500};
	border: 1px solid ${colors.gray300};
	flex: 1;
`;

export const RepoBtn = styled.button`
	display: flex;
	gap: 8px;
	height: 35px;
	padding: 6px 12px;
	border-radius: 8px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${colors.primaryGreen};
	outline: none;
	border: none;
`;

export const RepoBtnText = styled.span`
	color: #fff;
	font-size: 14px;
	font-weight: 700;
`;

export const FilterTextContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${colors.gray300};
	padding: 16px 0;
`;

export const FilterTextSmall = styled.small`
	font-size: 0.875rem;
	line-height: 1.25rem;
	text-transform: lowercase;
	display: flex;
	align-items: baseline;
	gap: 0.25rem;
`;

export const ClearButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	transition-property: color, background-color, border-color,
		text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	transition-delay: 60ms;
	gap: 0.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	cursor: pointer;
	&:hover {
		color: ${colors.blue600};
		& > span {
			background-color: ${colors.blue600};
		}
	}
`;

export const ClearButtonText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.375rem;
	color: #ffffff;
	background-color: ${colors.gray500};
	width: 16px;
	height: 16px;
	transition-property: color, background-color, border-color,
		text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	transition-delay: 60ms;
`;
