import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import {
	RepoDetailsData,
	RepoDetailsVars,
	REPO_DETAILS_QUERY,
	ResolvedRepoDetails,
} from '../gql';

@Injectable({
	providedIn: 'root',
})
export class RepoDataResolver
	implements Resolve<ResolvedRepoDetails | boolean>
{
	constructor(private apollo: Apollo) {}

	resolve(route: ActivatedRouteSnapshot): Observable<ResolvedRepoDetails> {
		const [owner, name] = this.getUser(route.url);

		return this.apollo
			.query<RepoDetailsData, RepoDetailsVars>({
				query: REPO_DETAILS_QUERY,
				variables: this.setVariables(owner, name),
			})
			.pipe(
				map(
					(res) =>
						({
							name,
							owner,
							branch: res.data.repository.defaultBranchRef.name,
							path: '',
							error: res.error ?? res.errors,
							loading: res.loading,
							repository: res.data.repository,
						} as ResolvedRepoDetails),
				),
			);
	}

	private getUser(segments: UrlSegment[]): string[] {
		return segments.map(({ path }: UrlSegment) => path);
	}

	private isOwnerAndNameValid(owner: string, name: string): boolean {
		return typeof owner === 'string' && typeof name === 'string';
	}

	private setVariables(owner: string, name: string): RepoDetailsVars {
		return this.isOwnerAndNameValid(owner, name)
			? {
					owner,
					name,
			  }
			: {
					owner: '',
					name: '',
			  };
	}
}
