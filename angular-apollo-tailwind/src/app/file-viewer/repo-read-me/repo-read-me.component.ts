import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { RepoReadMeGQL } from 'src/app/gql';

@Component({
  selector: 'app-repo-read-me',
  templateUrl: './repo-read-me.component.html',
  styleUrls: ['./repo-read-me.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoReadMeComponent implements OnInit, OnChanges {
  @Input() owner = '';
  @Input() name = '';
  @Input() fileName? = '';
  @Input() path = '';
  private initialized = false;

  readme$?: Observable<{ text?: string | null }>;

  constructor(private repoReadMeGQL: RepoReadMeGQL) {}

  ngOnInit(): void {
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      const pathChange = changes['path'];
      const fileNameChanges = changes['fileName'];
      if (pathChange || fileNameChanges) {
        this.loadReadme();
      }
    }
  }

  private loadReadme(): void {
    if (!this.path && !this.fileName) {
      this.readme$ = of({});
      return;
    }
    this.readme$ = this.repoReadMeGQL
      .fetch({
        owner: this.owner,
        name: this.name,
        expression: this.buildPathExpression(),
      })
      .pipe(
        map((res) => {
          const readMeNode = res?.data?.repository?.readme;
          const text =
            readMeNode?.__typename === 'Blob' ? readMeNode.text : null;

          return {
            text,
          };
        }),
      );
  }

  private buildPathExpression(): string {
    const path = this.path
      ? `${this.path}/${this.fileName}`
      : this.fileName || '';
    return `HEAD:${path}`;
  }
}
