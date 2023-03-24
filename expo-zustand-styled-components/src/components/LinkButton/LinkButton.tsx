import { useState, ReactNode } from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
import { useLinkProps } from '@react-navigation/native';

import { colors } from '../../utils/style-variables';
import { StyleProp, ViewStyle } from 'react-native';

interface LinkButtonProps {
  to: string;
  hasLine?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const LinkButton = ({
  to,
  children,
  hasLine = false,
  ...rest
}: LinkButtonProps) => {
  const { onPress, ...props } = useLinkProps({ to });

  const [isHovered, setIsHovered] = useState(false);

  if (Platform.OS === 'web') {
    // It's important to use a `View` or `Text` on web instead of `TouchableX`
    // Otherwise React Native for Web omits the `onClick` prop that's passed
    // You'll also need to pass `onPress` as `onClick` to the `View`
    // You can add hover effects using `onMouseEnter` and `onMouseLeave`
    return (
      <View
        onClick={onPress}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // @ts-ignore
        style={{ textDecoration: hasLine ? (isHovered ? `underline ${colors.blue600}` : 'none') : 'none' }}
        {...props}
        {...rest}>
        <Text>{children}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} {...props} {...rest}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
