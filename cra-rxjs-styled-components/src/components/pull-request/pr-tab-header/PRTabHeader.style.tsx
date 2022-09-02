import styled, { css } from 'styled-components';
import colors from '../../../constants/colors';

const flex = css`
	display: flex;
	align-items: center;
`;

export const Container = styled.div`
	background-color: ${colors.gray100};
	border: 1px solid ${colors.gray300};
	border-left-width: 1px;
	border-right-width: 1px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	padding: 16px;
	margin: -1px -1px 0;
	${flex};
	justify-content: space-between;

	svg {
		color: ${colors.gray600};
		display: inline-block;
		overflow: visible !important;
		vertical-align: text-bottom;
		fill: currentColor;
	}
`;

export const StatusTab = styled.div`
	${flex};
	font-size: 1.1rem;
	& > .statusLabel {
	}
`;

export const StatusLabel = styled.span`
	${flex};
	& > *:not(:last-child) {
		margin-right: 0.4rem;
	}
	svg {
		margin-right: 0.3rem;
	}
	span {
		font-size: 14px;
	}
	&:not(:last-child) {
		margin-right: 0.8rem;
	}
	color: ${colors.gray600};
	cursor: pointer;
	${(props: { active: Boolean }) =>
		props.active
			? css`
					color: ${colors.gray800};
					font-weight: 600;
					svg {
						color: ${colors.gray800};
					}
			  `
			: ''}
`;
