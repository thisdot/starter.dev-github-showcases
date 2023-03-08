import { View, Text, ViewStyle, StyleProp, ActivityIndicator } from 'react-native';

const LoaderErrorView = ({ error, style }: { error?: string; style?: StyleProp<ViewStyle> }) => {
  return (
    <View style={[{height: 200, justifyContent: 'center'}, style]}>
      {error ? <Text>{error}</Text> : <ActivityIndicator size="small" color="black" />}
    </View>
  );
};

export default LoaderErrorView;
