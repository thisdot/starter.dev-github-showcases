import { create } from 'zustand';

interface ITokenStore {
  access_token?: string;
}

export const useTokenStore = create<ITokenStore>(() => ({
  access_token: undefined,
}));
