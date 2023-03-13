import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import {
  Dropdown,
  DropdownBtn,
  DropdownOptions,
  DropdownOptionsHeading,
  DropdownOption,
  DropdownOptionsHeadingText,
  DropdownBtnText,
} from './FilterDropdown.styles';
import CorrectIcon from '../Icons/CorrectIcon';
import CaretIcon from '../Icons/CaretIcon';
import CloseIcon from '../Icons/CloseIcon';
import { colors } from '../../utils/style-variables';

interface FilterDropdownProps {
  name: string;
  items?: string[];
  selected?: string;
  showOptions?: string;
  zIndex?: number;
  selectOption?: (value: string) => void;
  setShowOptions?: (value: string) => void;
}

const FilterDropdown = ({
  name,
  items,
  selected,
  selectOption,
  zIndex,
  showOptions,
  setShowOptions,
}: FilterDropdownProps) => {
  const { width } = useWindowDimensions();
  const toggleOption = () => setShowOptions(showOptions === name ? null : name);
  return (
    <Dropdown zIndex={zIndex} screenWidth={width}>
      <DropdownBtn onPress={toggleOption} activeOpacity={0.8} screenWidth={width}>
        <DropdownBtnText>{name}</DropdownBtnText>
        <CaretIcon color={colors.gray400} />
      </DropdownBtn>
      <DropdownOptions show={showOptions === name}>
        <DropdownOptionsHeading>
          <DropdownOptionsHeadingText style={{}}>{name}</DropdownOptionsHeadingText>
          <TouchableOpacity onPress={() => setShowOptions(null)} activeOpacity={0.6}>
            <CloseIcon color={colors.gray600} width={20} height={20} />
          </TouchableOpacity>
        </DropdownOptionsHeading>
        {items.map((item) => (
          <DropdownOption key={item} onPress={() => selectOption(item)}>
            {selected === item ? (
              <CorrectIcon color={colors.gray600} />
            ) : (
              <View style={{ marginRight: 16 }} />
            )}
            <Text>{item}</Text>
          </DropdownOption>
        ))}
      </DropdownOptions>
    </Dropdown>
  );
};

export default FilterDropdown;
