import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { fetchPullRequests, selectPullRequests } from '../state/repository';

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.scss'],
})
export class PullRequestsComponent implements OnInit {
  owner = '';
  repoName = '';
  pullRequests$ = this.store.select(selectPullRequests);

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    //TODO: for some weird reason, this is not getting the params successfully; investigate
    this.owner = this.route.snapshot.paramMap.get('owner') as string;
    this.repoName = this.route.snapshot.paramMap.get('repo') as string;
    this.store.dispatch(
      fetchPullRequests({
        owner: this.owner,
        repoName: this.repoName,
      }),
    );
  }
}
