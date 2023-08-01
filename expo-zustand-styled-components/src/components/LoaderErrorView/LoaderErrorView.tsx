import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import { breakpoints } from '../../utils/breakpoints';

const LoaderErrorView = ({ error, style }: { error?: string; style?: StyleProp<ViewStyle> }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[{ height: width > breakpoints.mobile ? 200 : 100, justifyContent: 'center' }, style]}>
      {error ? <Text>{error}</Text> : <ActivityIndicator size="small" color="black" />}
    </View>
  );
};

export default LoaderErrorView;
