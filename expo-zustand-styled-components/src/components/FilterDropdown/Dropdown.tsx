import { View, Text, FlatList, TouchableOpacity, StyleProp } from 'react-native';

import DropdownOverlay from './DropdownOverlay';
import DropdownModal from './DropdownModal';
import DropdownWindow from './DropdownWindow';
import CorrectIcon from '../Icons/CorrectIcon';
import CloseIcon from '../Icons/CloseIcon';

import { colors } from '../../utils/style-variables';

import {
  DropdownOption,
  DropdownOptionsHeading,
  DropdownOptionsHeadingText,
} from './FilterDropdown.styles';
import { useRefs } from '../../hooks/useRefs';

const Dropdown = ({
  name,
  data,
  selected,
  isVisible,
  closeDropdown,
  layoutStyle,
  selectOption,
}: {
  data: string[];
  name: string;
  selected: string;
  isVisible: boolean;
  closeDropdown: () => void;
  selectOption: (i: string) => void;
  layoutStyle: Partial<StyleProp<View>>;
}) => {
  const { dropDownFlatlistRef} = useRefs();

  return (
    <DropdownModal visible={isVisible}>
      <DropdownOverlay onPress={closeDropdown} />
      <DropdownWindow layoutStyle={layoutStyle}>
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
