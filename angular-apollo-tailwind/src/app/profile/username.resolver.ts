import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameResolver implements Resolve<string | boolean> {
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const [owner] = this.getUser(route.url);

    return of(owner);
  }

  private getUser(segments: UrlSegment[]): string[] {
    return segments.map(({ path }: UrlSegment) => path);
  }
}
