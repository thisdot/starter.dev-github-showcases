export const DEFAULT_TOKEN_STORAGE_NAME = 'vue3-starter-dev-access-token';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (tokenStorageName = DEFAULT_TOKEN_STORAGE_NAME) => {
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
