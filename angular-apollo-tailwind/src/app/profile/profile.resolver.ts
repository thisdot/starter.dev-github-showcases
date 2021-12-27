import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface ProfileDetails {
  owner: string;
  isOrg: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileResolver implements Resolve<ProfileDetails | boolean> {
  resolve(route: ActivatedRouteSnapshot): Observable<ProfileDetails> {
    const profile = this.getProfileDetails(route.url);
    return of(profile);
  }

  private getPathSegments(segments: UrlSegment[]): string[] {
    return segments.map(({ path }: UrlSegment) => path);
  }

  private isOrg(path: string) {
    return path === 'orgs';
  }

  /**
   * Gets the organization's name if the first path segment is
   * `orgs` otherwise return the username.
   *
   * @param segments - route UrlSegments array
   * @returns org name or username
   */
  private getProfileDetails(segments: UrlSegment[]) {
    const paths = this.getPathSegments(segments);
    const isOrg = this.isOrg(paths[0]);
    return {
      owner: isOrg ? paths[1] : paths[0],
      isOrg,
    };
  }
}
