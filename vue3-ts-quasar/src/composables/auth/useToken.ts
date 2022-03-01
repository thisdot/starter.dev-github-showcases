export const DEFAULT_TOKEN_STORAGE_NAME = 'vue3-starter-dev-access-token';

interface UseToken {
  getAuthToken: () => string;
  saveAuthToken: (tokenToSave: string) => void;
  removeAuthToken: () => void;
}

export const useToken = (
  tokenStorageName = DEFAULT_TOKEN_STORAGE_NAME,
): UseToken => {
  const getAuthToken = () => {
    return window.sessionStorage.getItem(tokenStorageName);
  };

  const saveAuthToken = (tokenToSave: string) => {
    window.sessionStorage.setItem(tokenStorageName, tokenToSave);
  };

  const removeAuthToken = () => {
    window.sessionStorage.removeItem(tokenStorageName);
  };

  return { getAuthToken, saveAuthToken, removeAuthToken };
};
