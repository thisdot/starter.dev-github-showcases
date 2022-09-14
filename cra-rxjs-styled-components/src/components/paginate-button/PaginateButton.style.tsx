import colors from '../../constants/colors';
import styled from 'styled-components';

export const PaginateWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px 0;
	gap: 1.25rem;
	margin-top: 1rem;

	& .prev {
		position: relative;
		&::before {
			display: inline-block;
			width: 16px;
			height: 16px;
			vertical-align: text-bottom;
			content: '';
			background-color: currentColor;
			margin-right: 4px;
			-webkit-clip-path: polygon(
				9.8px 12.8px,
				8.7px 12.8px,
				4.5px 8.5px,
				4.5px 7.5px,
				8.7px 3.2px,
				9.8px 4.3px,
				6.1px 8px,
				9.8px 11.7px,
				9.8px 12.8px
			);
			clip-path: polygon(
				9.8px 12.8px,
				8.7px 12.8px,
				4.5px 8.5px,
				4.5px 7.5px,
				8.7px 3.2px,
				9.8px 4.3px,
				6.1px 8px,
				9.8px 11.7px,
				9.8px 12.8px
			);
		}
	}

	& .next {
		position: relative;
		&::after {
			display: inline-block;
			width: 16px;
			height: 16px;
			vertical-align: text-bottom;
			content: '';
			background-color: currentColor;
			margin-left: 4px;
			-webkit-clip-path: polygon(
				6.2px 3.2px,
				7.3px 3.2px,
				11.5px 7.5px,
				11.5px 8.5px,
				7.3px 12.8px,
				6.2px 11.7px,
				9.9px 8px,
				6.2px 4.3px,
				6.2px 3.2px
			);
			clip-path: polygon(
				6.2px 3.2px,
				7.3px 3.2px,
				11.5px 7.5px,
				11.5px 8.5px,
				7.3px 12.8px,
				6.2px 11.7px,
				9.9px 8px,
				6.2px 4.3px,
				6.2px 3.2px
			);
		}
	}
`;

export const ButtonWrapper = styled.button`
	color: ${colors.blue500};
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 0.5rem 0.75rem;
	border: 1px solid transparent;
	border-radius: 4px;
	transition: all 0.2s ease;

	.arrow.prev {
		margin-right: 0.5rem;
	}

	.arrow.next {
		margin-left: 0.5rem;
	}

	&:hover {
		border: 1px solid ${colors.gray300};
	}

	&:disabled {
		color: ${colors.gray400};
		cursor: default;
		border-color: transparent;
	}
`;
