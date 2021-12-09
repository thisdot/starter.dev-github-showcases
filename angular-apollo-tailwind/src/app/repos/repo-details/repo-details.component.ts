import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ResolvedRepoDetails } from 'src/app/gql';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
})
export class RepoDetailsComponent implements OnInit {
  repoDetails$: Observable<ResolvedRepoDetails> = this.route
    .data as Observable<ResolvedRepoDetails>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
