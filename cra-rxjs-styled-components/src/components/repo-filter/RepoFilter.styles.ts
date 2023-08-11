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
	// width: 100%;
	font-size: 16px;
	padding: 8px 12px;
	border-radius: 8px;
	background-color: #fff;
	color: ${colors.gray500};
	border: 1px solid ${colors.gray300};
	flex: 1;
	// flex-shrink: 1;
`;

export const RepoBtn = styled.button`
	display: flex;
	gap: 8px;
	height: 35px;
	padding: 6px 12px;
	border-radius: 8px;
	flex-direction: row;
	align-items: center;
	// flex-grow: 1;
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
