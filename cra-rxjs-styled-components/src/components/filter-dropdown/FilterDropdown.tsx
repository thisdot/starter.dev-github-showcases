import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { CaretIcon } from '../details-dropdown/DetailsDropdown.style';
import {
	CloseBtn,
	CloseText,
	CloseWrapper,
	DropDownMenu,
	DropdownBtn,
	DropdownBtnText,
	DropdownContainer,
	MenuItem,
	MenuItemContainer,
	MenuItemContent,
	MenuItemContentColor,
	NotSelected,
} from './FilterDropdown.styles';
import { CloseIcon, CorrectIcon } from '../icons';
interface FilterDropdownProps {
	name: string;
	items?: string[];
	selected?: string;
	itemsColors?: string[];
	selectOption?: (value: string) => void;
}
export default function FilterDropdown({
	name,
	items,
	selected,
	itemsColors,
	selectOption,
}: FilterDropdownProps) {
	const [showOptions, setShowOptions] = useState(false);
	let ref = useRef<HTMLDivElement>(null);

	const toggleOption = () => setShowOptions((prev) => !prev);

	const allItems = useMemo(() => {
		if (itemsColors && itemsColors.length === (items || []).length) {
			return (items || []).map((item, index) => ({
				name: item,
				color: itemsColors && (itemsColors[index] || 'ccc'),
			}));
		} else {
			return (items || []).map((item) => ({
				name: item,
				color: null,
			}));
		}
	}, [items, itemsColors]);

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setShowOptions(false);
		}
	};

	useLayoutEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('clic', handleClickOutside, true);
		};
	});
	return (
		<DropdownContainer ref={ref}>
			<DropdownBtn onClick={toggleOption}>
				<DropdownBtnText>{name}</DropdownBtnText>
				<CaretIcon active={false} />
			</DropdownBtn>
			{showOptions && (
				<DropDownMenu
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
				>
					<CloseWrapper>
						<CloseText>Select {name}</CloseText>
						<CloseBtn onClick={() => setShowOptions(false)}>
							<CloseIcon />
						</CloseBtn>
					</CloseWrapper>
					{allItems.map(({ name, color }, index) => (
						<MenuItemContainer role="none" onClick={() => selectOption?.(name)}>
							<MenuItem role="menuitem" tabIndex={-1}>
								{name === selected ? <CorrectIcon /> : <NotSelected />}
								<MenuItemContent>
									{color && (
										<MenuItemContentColor style={{ backgroundColor: `#${color}` }} />
									)}
									{name}
								</MenuItemContent>
							</MenuItem>
						</MenuItemContainer>
					))}
				</DropDownMenu>
			)}
		</DropdownContainer>
	);
}
