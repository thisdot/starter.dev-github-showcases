export const SIGN_IN_URL = (apiUrl: string, redirectUrl: string) => {
  const signInBaseUrl = `${apiUrl}/auth/signin`

  const url = new URL(signInBaseUrl)
  url.searchParams.set('redirect_url', `${redirectUrl}/redirect`)
  return url.toString()
}
