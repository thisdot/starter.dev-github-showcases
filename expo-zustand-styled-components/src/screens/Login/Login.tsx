import { useEffect } from 'react';
import { Platform } from 'react-native';
import { MOBILE_REDIRECT_URI } from '@env';
import * as WebBrowser from 'expo-web-browser';
import { URLSearchParams } from 'react-native-url-polyfill';

import { RootStackScreenProps } from '../../../types';
import { AUTH_URL } from '../../utils/constants';
import { useAuthStore } from '../../hooks/stores';
import Button from '../../components/Button';

import { SafeAreaViewStyled } from './Login.styles';

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
    } else {
      useAuthStore.setState({ isLoading: false });
    }
  };

  useEffect(() => {
    if (token) {
      navigation.navigate('AppNavigator', { screen: 'Home', path: '' });
    }
  }, [token]);

  return (
    <SafeAreaViewStyled>
      <Button
        primary
        isLoading={isLoading}
        title="Sign in with GitHub"
        loadingText="Logging in..."
        onPress={_handlePressButtonAsync}
        disabled={isLoading}
      />
    </SafeAreaViewStyled>
  );
};

export default Login;
