import { View, Text, ViewStyle, StyleProp, ActivityIndicator } from 'react-native';

const LoaderErrorView = ({ error, style }: { error?: string, style?: StyleProp<ViewStyle> }) => {
  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={style}>
      <ActivityIndicator size="small" color="black" />
    </View>
  );
};

export default LoaderErrorView;
