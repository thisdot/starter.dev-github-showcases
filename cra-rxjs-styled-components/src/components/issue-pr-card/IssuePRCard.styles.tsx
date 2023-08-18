import styled, { css } from 'styled-components';
import colors from '../../constants/colors';

const flex = css`
	display: flex;
	align-items: center;
`;
export const IssuePRCardWrapper = styled.div`
	${flex};
	padding: 15px 20px;
	border-bottom: 1px solid ${colors.gray300};
	justify-content: space-between;
	& > .left {
		${flex};
		flex: 1 1 auto;
		& > .icon {
			font-size: 1.1rem;
			margin-right: 0.8rem;
			align-self: start;
			color: ${colors.green800};
			&.closed {
				color: ${colors.purple500};
			}
		}
		& > .info {
			${flex};
			flex-direction: column;
			align-items: start;
			& > .card_top {
				margin-bottom: 0.8rem;
				& > .heading {
					font-weight: 600 !important;
					font-size: 16px !important;
					vertical-align: middle !important;
					color: ${colors.gray800};
					&:hover {
						color: ${colors.blue800};
					}
				}
				& > .card_label {
					padding: 0.25rem 0.5rem;
					border-radius: 9999px;
					font-size: 0.875rem;
					line-height: 1.25rem;
					margin-top: 0.5rem;
					margin-left: 0.5rem;
					white-space: nowrap;
				}
			}

			& > .sub_heading {
				color: ${colors.gray600};
				font-size: 12px !important;
				& > *:not(:last-child) {
					margin-inline: 0.2rem;
				}
			}
		}
	}

	& > .right {
		width: 20%;
		flex-shrink: 0;
		.message {
			${flex};
			justify-content: flex-end;
			& .icon {
				font-size: 1.1rem;
			}
		}
	}

	a {
		text-decoration: none;
		color: ${colors.gray600};
		&:hover {
			color: ${colors.blue800};
		}
	}
	svg {
		color: ${colors.gray600};
		display: inline-block;
		overflow: visible !important;
		vertical-align: text-bottom;
		fill: currentColor;
		&:hover {
			color: ${colors.blue800};
		}
	}
`;
