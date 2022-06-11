import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RepoApiResponse, RepoState } from 'src/app/state/repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  getRepositoryInfo(owner: string, repoName: string): Observable<RepoState> {
    const url = `${environment.githubUrl}/repos/${owner}/${repoName}`;

    return this.http.get<RepoApiResponse>(url).pipe(
      map((data) => ({
        repoName: data.name,
        description: data.description,
        website: data.homepage,
        visibility: data.visibility,
        watchCount: data.watchers_count,
        starCount: data.stargazers_count,
        forkCount: data.forks_count,
        issueCount: data.open_issues_count,
        tags: data.topics,
      })),
    );
  }
}
