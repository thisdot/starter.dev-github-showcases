import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { RepoReadMeGQL } from 'src/app/gql';

@Component({
  selector: 'app-repo-read-me',
  templateUrl: './repo-read-me.component.html',
  styleUrls: ['./repo-read-me.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoReadMeComponent implements OnInit {
  @Input() owner = '';
  @Input() name = '';
  @Input() fileName = '';
  @Input() path = '';

  readme$!: Observable<{ text?: string | null }>;

  constructor(private repoReadMeGQL: RepoReadMeGQL) {}

  ngOnInit(): void {
    this.readme$ = this.repoReadMeGQL
      .watch({
        owner: this.owner,
        name: this.name,
        expression: this.buildPathExpression(),
      })
      .valueChanges.pipe(
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
    const path = this.path ? `${this.path}/${this.fileName}` : this.fileName;
    return `HEAD:${path}`;
  }
}
