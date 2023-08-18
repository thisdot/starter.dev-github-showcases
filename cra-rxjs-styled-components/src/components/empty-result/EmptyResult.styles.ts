import colors from '../../constants/colors';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 0;
	width: 100%;
`;

export const Header = styled.h3`
	font-size: 24px;
	line-height: 32px;
	font-weight: 600;
	color: ${colors.gray900};
	text-align: center;
	margin: 16px 0;
`;
