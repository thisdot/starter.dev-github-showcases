import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ResolvedRepoDetails } from 'src/app/gql';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
})
export class RepoDetailsComponent implements OnInit {
  repoDetails$: Observable<ResolvedRepoDetails | null> = of(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.repoDetails$ = this.route.data as Observable<ResolvedRepoDetails>;
  }

  formattedPath(path: string) {
    return Array.isArray(path) ? path.join('/') : path;
  }
}
