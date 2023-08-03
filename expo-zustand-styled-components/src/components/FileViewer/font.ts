import { Platform } from 'react-native';

export const fontFamily =
  Platform.OS === 'web'
    ? 'Menlo, monospace, Monaco, Courier New'
    : Platform.OS === 'android'
    ? 'monospace'
    : 'Menlo';
