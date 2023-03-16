import { View, Text, FlatList, TouchableOpacity, StyleProp, ViewProps } from 'react-native';

import CorrectIcon from '../Icons/CorrectIcon';
import CloseIcon from '../Icons/CloseIcon';

import {
  DropdownWindow,
  DropdownOption,
  DropdownOverlay,
  DropdownOptionsHeading,
  DropdownOptionsHeadingText,
} from './FilterDropdown.styles';
import DropdownModal from './DropdownModal';

import { useRefs } from '../../hooks/useRefs';
import { colors } from '../../utils/style-variables';

const Dropdown = ({
  name,
  data,
  selected,
  isVisible,
  layoutStyle,
  screenWidth,
  selectOption,
  closeDropdown,
}: {
  data: string[];
  name: string;
  selected: string;
  isVisible: boolean;
  screenWidth: number;
  closeDropdown: () => void;
  selectOption: (i: string) => void;
  layoutStyle?: StyleProp<ViewProps>;
}) => {
  const { dropDownFlatlistRef } = useRefs();

  return (
    <DropdownModal visible={isVisible}>
      <DropdownOverlay activeOpacity={1} onPress={closeDropdown} screenWidth={screenWidth} />
      <DropdownWindow style={layoutStyle}>
        <FlatList
          data={data}
          ref={dropDownFlatlistRef}
          ListHeaderComponent={() => (
            <DropdownOptionsHeading>
              <DropdownOptionsHeadingText>{name}</DropdownOptionsHeadingText>
              <TouchableOpacity onPress={closeDropdown} activeOpacity={0.6}>
                <CloseIcon color={colors.gray600} width={20} height={20} />
              </TouchableOpacity>
            </DropdownOptionsHeading>
          )}
          renderItem={({ item }) => (
            <DropdownOption onPress={() => selectOption(item)}>
              {selected === item ? (
                <CorrectIcon color={colors.gray600} />
              ) : (
                <View style={{ marginRight: 16 }} />
              )}
              <Text>{item}</Text>
            </DropdownOption>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </DropdownWindow>
    </DropdownModal>
  );
};

export default Dropdown;
