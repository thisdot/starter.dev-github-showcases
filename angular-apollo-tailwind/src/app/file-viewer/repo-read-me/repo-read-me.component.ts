import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import {
  ReadMe,
  RepoReadmeData,
  RepoReadmeVars,
  REPO_README_QUERY,
} from 'src/app/gql';

@Component({
  selector: 'app-repo-read-me',
  templateUrl: './repo-read-me.component.html',
  styleUrls: ['./repo-read-me.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoReadMeComponent implements OnInit {
  @Input() owner = '';
  @Input() name = '';

  readme$!: Observable<ReadMe>;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.readme$ = this.apollo
      .watchQuery<RepoReadmeData, RepoReadmeVars>({
        query: REPO_README_QUERY,
        variables: {
          owner: this.owner,
          name: this.name,
        },
      })
      .valueChanges.pipe(
        map((res) => {
          const readMeNode = res.data.repository.readme;
          const text = readMeNode ? readMeNode.text : null;
          return {
            ...res,
            text: text as string,
          };
        }),
      );
  }
}
