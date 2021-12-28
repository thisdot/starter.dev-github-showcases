import { Component } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { RouteConfigService } from '@this-dot/route-config';
import { Apollo } from 'apollo-angular';
import { Observable, withLatestFrom, map, switchMap } from 'rxjs';
import { RepoPageDetails } from 'src/app/gql';
import {
  FileDetails,
  RepoFileData,
  RepoFileVars,
} from 'src/app/gql/models/repo-file';
import { REPO_FILE_QUERY } from 'src/app/gql/queries/repo-file.query';
import { mapLanguageExt } from '../utils/map-language-ext';

@Component({
  selector: 'app-file-explorer-blob',
  templateUrl: './file-explorer-blob.component.html',
})
export class FileExplorerBlobComponent {
  fileDetails$: Observable<FileDetails> = this.routeConfigService
    .getLeafConfig<RepoPageDetails>('repoPageData')
    .pipe(
      withLatestFrom(
        this.route.paramMap.pipe(map((params: ParamMap) => params.get('path'))),
      ),
      switchMap(([{ owner, name, branch }, path]) =>
        this.apollo
          .watchQuery<RepoFileData, RepoFileVars>({
            query: REPO_FILE_QUERY,
            variables: {
              owner,
              name,
              expression: `${branch}:${path ?? ''}`,
            },
          })
          .valueChanges.pipe(
            map((res) => {
              const file = res.data.repository.blob;
              const extension = path?.split('.').pop() as string;
              const language = mapLanguageExt(extension);
              const text = file.text ? file.text : '';
              const lines = text.split('\n').length;

              return {
                ...res,
                owner,
                name,
                branch,
                basePath: `/${owner}/${name}`,
                path: path ?? '',
                byteSize: file.byteSize,
                extension,
                language,
                text,
                lines,
              };
            }),
          ),
      ),
    );

  constructor(
    private route: ActivatedRoute,
    private routeConfigService: RouteConfigService<string, 'repoPageData'>,
    private apollo: Apollo,
  ) {}
}
