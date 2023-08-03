import styled from 'styled-components';
import colors from '../../../constants/colors';

export const Wrapper = styled.div`
	margin-inline: auto;
	margin-top: 3rem;
	margin-bottom: 3rem;
	max-width: 80rem;
`;

export const Content = styled.div`
	border: 1px solid ${colors.gray300};
	border-radius: 6px;
`;
export const PaginationContainer = styled.div`
	padding: 10px 0;

	/* pagination */
	.pagination {
		display: flex;
		padding: 0;
		justify-content: center;
		list-style: none;
		cursor: pointer;
	}

	.pagination a {
		padding: 1px;
		border-radius: 5px;
		color: var(--default-text-color);
		font-size: 14px;
		padding: 5px 10px;
		margin: 0 5px;
	}

	.pagination__link {
		font-weight: bold;
	}

	.pagination__item a:hover {
		text-decoration: none;
		border: 1px solid var(--text-muted);
	}

	.pagination__link_end a {
		color: #539bf5;
		text-decoration: none;
		padding: 7px 10px;
	}
	.pagination__link_end a:hover {
		border: 1px solid var(--text-muted);
	}

	.pagination__link--active a {
		color: #fff;
		background: #316dca;
	}
	.pagination__link--active a:hover {
		border: none !important;
	}

	.pagination__link--disabled,
	.pagination__link--disabled a {
		color: #545d68 !important;
		text-decoration: none !important;
		border: none !important;
		cursor: default;
	}
`;
