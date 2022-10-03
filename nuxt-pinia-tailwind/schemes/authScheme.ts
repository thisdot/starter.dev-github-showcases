import { LocalScheme } from '@nuxtjs/auth-next/dist/runtime';
import { HTTPRequest, HTTPResponse } from '@nuxtjs/auth-next';
import { IUser } from '@/types/user/interfaces';

const getPageCount = (pageData: string) => {
  return (
    pageData.split(',')[1].match(/.*page=(?<page_num>\d+)/)?.groups?.page_num ||
    0
  );
};

export default class CustomLoginScheme extends LocalScheme {
  //  Add any custom options

  // Override `fetchUser` method of `local` scheme
  async fetchUser(endpoint: HTTPRequest): Promise<void | HTTPResponse> {
    // Token is required but not available
    if (!this.check().valid) {
      return;
    }

    // User endpoint is disabled.
    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return;
    }

    // Try to fetch user and then set
    try {
      const response = await this.$auth.requestWith(
        this.name,
        endpoint,
        this.options.endpoints.user
      );

      const user = response.data;

      // Fetch organizations
      const orgsEndpoint: HTTPRequest = {
        ...endpoint,
        url: `users/${user.login}/orgs`,
      };

      const getOrgs = this.$auth.requestWith(this.name, orgsEndpoint);
      //

      // Fetch stars
      const starsEndpoint: HTTPRequest = {
        ...endpoint,
        url: `users/${user.login}/starred?per_page=1`,
        headers: {
          Accept: 'application/vnd.github.preview',
        },
      };

      const getStars = this.$auth.requestWith(this.name, starsEndpoint);
      //

      const [orgs, stars] = await Promise.all([getOrgs, getStars]);

      const starsCount = getPageCount(stars.headers.link);
      const orgsCount = getPageCount(orgs.headers.link);

      const customUser: IUser = {
        ...user,
        orgs_count: orgsCount,
        stars_count: starsCount,
      };

      this.$auth.setUser(customUser);

      return response;
    } catch (error: any) {
      this.$auth.callOnError(error, { method: 'fetchUser' });
    }
  }
}
