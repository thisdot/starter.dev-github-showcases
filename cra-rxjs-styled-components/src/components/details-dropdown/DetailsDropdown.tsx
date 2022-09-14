import { FC } from 'react';
import CloseIcon from '../icons/CloseIcon';
import {
	DropdownContainer,
	Dropdown,
	Summary,
	Details,
	CaretIcon,
	CloseDropdownContainer,
	CloseButton,
} from './DetailsDropdown.style';
import type { DropdownTitle } from '../pull-request/types';

interface Props {
	title: DropdownTitle;
	DropdownLabel: string;
	isOpen: boolean;
	toggleDropDown: () => void;
}

const DetailsDropdown: FC<Props> = ({
	title,
	DropdownLabel,
	isOpen,
	toggleDropDown,
	children,
}) => {
	return (
		<DropdownContainer>
			<Details
				onBlur={toggleDropDown}
				onClick={(e) => {
					e.preventDefault();
					toggleDropDown();
				}}
				open={isOpen}
			>
				<Summary>
					<span>{title}</span>
					<CaretIcon active={isOpen} />
				</Summary>
				<Dropdown>
					<CloseDropdownContainer>
						<strong>{DropdownLabel}</strong>
						<CloseButton
							onClick={toggleDropDown}
							type="button"
							data-toggle-for="type-options"
						>
							<CloseIcon />
						</CloseButton>
					</CloseDropdownContainer>
					{children}
				</Dropdown>
			</Details>
		</DropdownContainer>
	);
};

export default DetailsDropdown;
