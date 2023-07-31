import { View, Text, FlatList, TouchableOpacity, StyleProp, ViewProps } from 'react-native';

import CorrectIcon from '../Icons/CorrectIcon';
import CloseIcon from '../Icons/CloseIcon';

import {
  DropdownWindow,
  DropdownOption,
  DropdownOverlay,
  DropdownOptionsHeading,
  DropdownOptionsHeadingText,
  DropdownItemContent,
  DropdownItemContentColor,
} from './FilterDropdown.styles';
import DropdownModal from './DropdownModal';

import { useRefs } from '../../hooks/useRefs';
import { colors } from '../../utils/style-variables';

const Dropdown = ({
  name,
  data,
  itemsColors,
  selected,
  isVisible,
  layoutStyle,
  selectOption,
  closeDropdown,
}: {
  data: string[];
  itemsColors?: string[];
  name: string;
  selected: string;
  isVisible: boolean;
  closeDropdown: () => void;
  selectOption: (i: string) => void;
  layoutStyle?: StyleProp<ViewProps>;
}) => {
  const { dropDownFlatlistRef } = useRefs();

  const allItems = (): { name: string; color: string | null }[] => {
    if (itemsColors && itemsColors.length === data.length) {
      return data.map((item, index) => ({
        name: item,
        color: itemsColors && (itemsColors[index] || 'ccc'),
      }));
    } else {
      return data.map((item) => ({
        name: item,
        color: null,
      }));
    }
  };

  return (
    <DropdownModal visible={isVisible}>
      <DropdownOverlay activeOpacity={1} onPress={closeDropdown} />
      <DropdownWindow style={layoutStyle}>
        <FlatList
          data={allItems()}
          ref={dropDownFlatlistRef}
          ListHeaderComponent={() => (
            <DropdownOptionsHeading>
              <DropdownOptionsHeadingText>Select {name}</DropdownOptionsHeadingText>
              <TouchableOpacity onPress={closeDropdown} activeOpacity={0.6}>
                <CloseIcon color={colors.gray600} width={20} height={20} />
              </TouchableOpacity>
            </DropdownOptionsHeading>
          )}
          renderItem={({ item: { name, color } }) => (
            <DropdownOption onPress={() => selectOption(name)}>
              {selected === name ? (
                <CorrectIcon color={colors.gray600} />
              ) : (
                <View style={{ marginRight: 16 }} />
              )}
              <DropdownItemContent>
                {color && <DropdownItemContentColor style={{ backgroundColor: `#${color}` }} />}
                <Text>{name}</Text>
              </DropdownItemContent>
            </DropdownOption>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </DropdownWindow>
    </DropdownModal>
  );
};

export default Dropdown;
