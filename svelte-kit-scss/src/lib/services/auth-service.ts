import { goto } from "$app/navigation";
import { setUserToken, startAuthentication } from "$lib/stores/auth";

export class AuthService {
  
  private get signInUrl() : string {
    const redirectUrl = this.getRedirectUrl();
    return `${this.apiUrl}/api/auth/signin?redirect_url=${redirectUrl}`;
  }

  private get tokenUrl() : string {
    return `${this.apiUrl}/api/auth/token`;
  }  

  constructor(
    private apiUrl: string,
    private clientRedirectUrl: string
  ) {
  }

  /**
   * Initiates sign in with GitHub and provides a redirect url
   *
   * @returns void
   */
  signIn(): void {
    startAuthentication();
    setUserToken(undefined);
    window.location.href = this.signInUrl;
  }

  signOut(): void {
    goto('/signin');
  }

  /**
   * Calls the server to get the user's access token and saves it
   *
   * @return {*}  {Promise<string | undefined>}
   */
  async saveUserToken(): Promise<string | undefined> {
    const response = await fetch(this.tokenUrl, {
      credentials: 'include'
    });
    const {access_token} = await response.json();    
    setUserToken(access_token);
    return access_token;
  }

  /**
   * Determines the host of the page, and uses that to create a redirect url
   */
  getRedirectUrl() {
    const prPreviewRegex = /pr-(?:\d+)+.(?:[a-z0-9]+)+.amplifyapp.com/;
    const currentUrlHost = window.location.host;
    const prMatch = prPreviewRegex.test(currentUrlHost);
    let redirectUrl: string;
    if (prMatch) {
      redirectUrl = `https://${currentUrlHost}/redirect`;
    } else {
      redirectUrl = this.clientRedirectUrl;
    }
    return redirectUrl;
  }
}
