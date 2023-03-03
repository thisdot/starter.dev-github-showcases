import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { URLSearchParams } from 'react-native-url-polyfill';

import { RootStackScreenProps } from '../../../types';
import { AUTH_URL } from '../../utils/constants';
import { authStore } from '../../stores/auth';
import Button from '../../components/Button';

import { SafeAreaViewStyled } from './Login.styles';

WebBrowser.maybeCompleteAuthSession();
const Login = ({ navigation }: RootStackScreenProps<'AuthNavigator'>) => {
  const { token, isLoading } = authStore();

  const _handlePressButtonAsync = async () => {
    authStore.setState({ isLoading: true });
    const result = await WebBrowser.openAuthSessionAsync(AUTH_URL);

    if (result.type === 'success') {
      // TODO: so expo web has a bug with using react-native-url-polyfill globally
      // and I resort to using it locally here with the following line of code. 
      const url = new URLSearchParams(result.url);
      // TODO: this is a hacky way to get the access_token from the url
      const access_token = url.toString().split('access_token=')[1];
      authStore.setState({ token: access_token, isLoading: false });
    }
  };

  useEffect(() => {
    if (token) {
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
