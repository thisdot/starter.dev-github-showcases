import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { FileDetails, RepoFileGQL } from 'src/app/gql';
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

  private _errorLoadFile?: unknown;
  get errorLoadFile(): unknown | undefined {
    return this._errorLoadFile;
  }

  file$: Observable<FileDetails> = this.route.paramMap.pipe(
    tap(() => (this._errorLoadFile = undefined)),
    map((params: ParamMap) => params.get('path') as string),
    switchMap((path: string) =>
      this.repoFileGQL
        .watch({
          owner: this.owner,
          name: this.name,
          expression: `${this.branch}:${path ?? ''}`,
        })
        .valueChanges.pipe(
          map((res) => {
            const file = res?.data?.repository?.blob;
            const extension = path?.split('.').pop() as string;
            const language = mapLanguageExt(extension);
            const text = file?.__typename === 'Blob' ? file.text : '';
            const byteSize = file?.__typename === 'Blob' ? file.byteSize : '';
            const lines = text ? text.split('\n').length : 0;

            return {
              path,
              byteSize,
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
    private repoFileGQL: RepoFileGQL,
  ) {}
}
