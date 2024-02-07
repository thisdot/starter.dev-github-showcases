import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  OrganizationReposApiParams,
  OrganizationReposApiResponse,
} from './organization.interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  constructor(private http: HttpClient) {}

  getOrganizationRepos(
    organizationName: string,
    params?: OrganizationReposApiParams,
  ): Observable<OrganizationReposApiResponse> {
    const defaultParams = {
      type: 'all',
      sort: 'updated',
      direction: 'desc',
      per_page: 30,
      page: 1,
    };

    const url = `${environment.githubUrl}/orgs/${encodeURIComponent(
      organizationName,
    )}/repos`;

    return this.http.get<OrganizationReposApiResponse>(url, {
      params: new HttpParams({
        fromObject: { ...Object.assign(defaultParams, params) },
      }),
    });
  }
}
