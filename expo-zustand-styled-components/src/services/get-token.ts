import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from '@env';

export const getToken = async (code: string) => {
  return await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URL,
    },
    {
      headers: { Accept: 'application/json' },
    }
  );
};
