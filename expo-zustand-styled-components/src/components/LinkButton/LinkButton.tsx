import { useState, ReactNode } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { useLinkProps } from '@react-navigation/native';

import { colors } from '../../utils/style-variables';
import { StyleProp, ViewStyle } from 'react-native';

interface LinkButtonProps {
  to: string;
  onClick?: () => void;
  hasLine?: boolean;
  children: ReactNode;
  testID?: string;
  style?: StyleProp<ViewStyle>;
}

const LinkButton = ({ to, children, hasLine = false, onClick, ...rest }: LinkButtonProps) => {
  const { onPress, ...props } = useLinkProps({ to });

  const [isHovered, setIsHovered] = useState(false);

  if (Platform.OS === 'web') {
    // It's important to use a `View` or `Text` on web instead of `TouchableX`
    // Otherwise React Native for Web omits the `onClick` prop that's passed
    // You'll also need to pass `onPress` as `onClick` to the `View`
    // You can add hover effects using `onMouseEnter` and `onMouseLeave`
    return (
      <View
        onClick={() => {
          onClick && onClick();
          onPress();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          // @ts-ignore
          textDecoration: hasLine ? (isHovered ? `underline ${colors.blue600}` : 'none') : 'none',
        }}
        {...props}
        {...rest}>
        {children}
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => {
        onClick && onClick();
        onPress();
      }}
      {...props}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default LinkButton;
