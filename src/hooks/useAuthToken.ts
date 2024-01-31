import {
  setLocalStorageItemAndDispatch,
  useLocalStorageNoSSR,
} from "./useLocalStorageNoSSR";

export const AUTH_TOKEN_KEY = "auth-jwt-token";

export const login = (token: string) =>
  setLocalStorageItemAndDispatch(AUTH_TOKEN_KEY, token);

export const logout = () => {
  setLocalStorageItemAndDispatch(AUTH_TOKEN_KEY, null);
};

export function useAuthToken() {
  const [token] = useLocalStorageNoSSR(AUTH_TOKEN_KEY);
  return token;
}
