import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { URLSearchParams } from 'react-native-url-polyfill';

import { RootStackScreenProps } from '../../../types';
import { AUTH_URL } from '../../utils/constants';
import { useAuthStore } from '../../hooks/stores';
import Button from '../../components/Button';

import { SafeAreaViewStyled } from './Login.styles';
import getViewerProfile from '../../services/get-viewer-info';
import { MOBILE_REDIRECT_URI } from '@env';
import { Platform } from 'react-native';

WebBrowser.maybeCompleteAuthSession();
const Login = ({ navigation }: RootStackScreenProps<'AuthNavigator'>) => {
  const { token, isLoading } = useAuthStore();

  const _handlePressButtonAsync = async () => {
    useAuthStore.setState({ isLoading: true });
    const result =
      Platform.OS === 'android'
        ? await WebBrowser.openAuthSessionAsync(AUTH_URL, MOBILE_REDIRECT_URI)
        : await WebBrowser.openAuthSessionAsync(AUTH_URL);

    if (result.type === 'success') {
      // TODO: so expo web has a bug with using react-native-url-polyfill globally
      // and I resort to using it locally here with the following line of code.
      const url = new URLSearchParams(result.url);
      // TODO: this is a hacky way to get the access_token from the url that works for both web and mobile
      const access_token = url.toString().split('access_token=')[1];
      useAuthStore.setState({ token: access_token, isLoading: false });
    }
  };

  useEffect(() => {
    if (token) {
      getViewerProfile();
      navigation.navigate('AppNavigator', { screen: 'Home' });
    }
  }, [token]);

  return (
    <SafeAreaViewStyled>
      <Button
        primary
        isLoading={isLoading}
        title="Sign in with GitHub"
        loadingText="Loging in..."
        onPress={_handlePressButtonAsync}
      />
    </SafeAreaViewStyled>
  );
};

export default Login;
