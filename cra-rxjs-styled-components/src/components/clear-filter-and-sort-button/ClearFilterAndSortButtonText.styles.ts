import colors from '../../constants/colors';
import styled from 'styled-components';

export const ClearButtonContainer = styled.div<{ variant: 'profile' | 'repo' }>`
	display: flex;
	align-items: center;
	justify-content: ${(props) =>
		props.variant === 'profile' ? 'center' : 'flex-start'};
	padding: ${(props) => (props.variant === 'profile' ? '0' : '16px')};
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
