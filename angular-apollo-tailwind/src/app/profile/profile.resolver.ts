import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getPathSegments, isOrgPath } from '../utils';

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

  /**
   * Gets the organization's name if the first path segment is
   * `orgs` otherwise return the username.
   *
   * @param segments - route UrlSegments array
   * @returns org name or username
   */
  private getProfileDetails(segments: UrlSegment[]) {
    const paths = getPathSegments(segments);
    const isOrg = isOrgPath(paths[0]);
    return {
      owner: isOrg ? paths[1] : paths[0],
      isOrg,
    };
  }
}
