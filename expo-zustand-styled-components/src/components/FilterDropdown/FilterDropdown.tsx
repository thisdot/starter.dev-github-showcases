import { View, ViewProps, StyleProp, useWindowDimensions } from 'react-native';

import { DropdownBtn, DropdownBtnText, DropdownContainer } from './FilterDropdown.styles';

import CaretIcon from '../Icons/CaretIcon';
import Dropdown from './Dropdown';

import { useRefs } from '../../hooks/useRefs';
import { useLayoutDropdown } from '../../hooks/useLayoutDropdown';
import { colors } from '../../utils/style-variables';

interface FilterDropdownProps {
  name: string;
  items?: string[];
  selected?: string;
  showOptions?: string;
  itemsColors?: string[];
  style?: StyleProp<Partial<ViewProps>>;
  selectOption?: (value: string) => void;
  setShowOptions?: (value: string) => void;
}

const FilterDropdown = ({
  name,
  items,
  style,
  selected,
  itemsColors,
  showOptions,
  selectOption,
  setShowOptions,
}: FilterDropdownProps) => {
  const { width } = useWindowDimensions();
  const { dropdownButtonRef } = useRefs();
  const { dropdownWindowStyle, onDropdownButtonLayout } = useLayoutDropdown(items);

  const toggleOption = () => setShowOptions(showOptions === name ? null : name);
  const closeDropdown = () => setShowOptions(null);
  const openDropdown = () => {
    if (dropdownButtonRef?.current) {
      (dropdownButtonRef?.current as View).measure((fx, fy, w, h, px, py) => {
        onDropdownButtonLayout(h, px, py);
        toggleOption();
      });
    }
  };

  return (
    <DropdownContainer>
      <DropdownBtn
        activeOpacity={0.8}
        screenWidth={width}
        onPress={openDropdown}
        ref={dropdownButtonRef}
        style={style}>
        <DropdownBtnText>{name}</DropdownBtnText>
        <CaretIcon color={colors.gray400} />
      </DropdownBtn>
      <Dropdown
        name={name}
        data={items}
        itemsColors={itemsColors}
        selected={selected}
        selectOption={selectOption}
        closeDropdown={closeDropdown}
        isVisible={showOptions === name}
        layoutStyle={dropdownWindowStyle}
      />
    </DropdownContainer>
  );
};

export default FilterDropdown;
