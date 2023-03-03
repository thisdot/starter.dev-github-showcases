import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

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
      const url = new URL(result.url);
      const access_token = url.searchParams.get('access_token');
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
