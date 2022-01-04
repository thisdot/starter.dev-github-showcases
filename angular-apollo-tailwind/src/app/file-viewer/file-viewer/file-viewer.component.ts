import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable, map, switchMap } from 'rxjs';
import {
  FileDetails,
  RepoFileData,
  RepoFileVars,
  REPO_FILE_QUERY,
} from 'src/app/gql';
import { mapLanguageExt } from '../utils/map-language-ext';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css'],
})
export class FileViewerComponent {
  @Input() owner = '';
  @Input() name = '';
  @Input() branch = '';

  file$: Observable<FileDetails> = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('path') as string),
    switchMap((path: string) =>
      this.apollo
        .watchQuery<RepoFileData, RepoFileVars>({
          query: REPO_FILE_QUERY,
          variables: {
            owner: this.owner,
            name: this.name,
            expression: `${this.branch}:${path ?? ''}`,
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
              path,
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

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}
}
