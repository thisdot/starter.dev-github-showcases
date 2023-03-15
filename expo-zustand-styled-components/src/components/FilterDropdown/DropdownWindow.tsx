import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../utils/style-variables';

const DropdownWindow = ({ layoutStyle, children }) => {
  return (
    <View style={{ ...styles.dropdownOverlayView, ...styles.shadow, ...layoutStyle }}>
      {children}
    </View>
  );
};

export default DropdownWindow;

const styles = StyleSheet.create({
  dropdownOverlayView: {
    backgroundColor: colors.gray200,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: colors.gray300,
    minWidth: 150,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});
