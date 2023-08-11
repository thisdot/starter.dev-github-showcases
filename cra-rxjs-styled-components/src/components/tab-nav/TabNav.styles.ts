import styled from 'styled-components';

export const Container = styled.div`
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: var(--gray-200);
`;

export const TabContainer = styled.div`
	flex-direction: row;
	margin-bottom: -2px;
	justify-content: space-between;
	flex-grow: 1;

	@media (min-width: 768px) {
		flex-grow: 0;
	}
`;

export const Tab = styled.button<{ isActive: boolean }>`
	outline: none;
	border: none;
	background-color: transparent;
	cursor: pointer;
	gap: 4px;
	padding: 6px;
	margin-right: 4px;
	flex-direction: row;
	align-items: center;
	border-bottom-width: 2px;
	border-bottom-style: solid;
	border-bottom-color: ${({ isActive }) =>
		isActive ? 'orange' : 'transparent'};
`;
export const CountView = styled.div`
	background-color: var(--gray-200);
	margin-left: 8px;
	padding: 4px 6px;
	border-radius: 20px;
`;

export const CountText = styled.span`
	color: var(--gray-800);
	font-size: 12px;
`;

export const TabText = styled.span<{ isActive: boolean }>`
	font-weight: ${({ isActive }) => (isActive ? '600' : '500')};
	margin-left: 3px;
`;
