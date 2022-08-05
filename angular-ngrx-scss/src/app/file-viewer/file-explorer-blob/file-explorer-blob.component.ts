import { Component, OnInit } from '@angular/core';
import {
  fetchFileContents,
  selectCurrentlySelectedFile,
} from '../../state/repository';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-file-explorer-blob',
  templateUrl: './file-explorer-blob.component.html',
  styleUrls: ['./file-explorer-blob.component.scss'],
})
export class FileExplorerBlobComponent implements OnInit {
  selectedFile$ = this.store.select(selectCurrentlySelectedFile);
  owner!: string;
  repoName!: string;
  path!: string;
  commitOrBranchOrTagName!: string;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.owner = this.route.snapshot.paramMap.get('owner') as string;
    this.repoName = this.route.snapshot.paramMap.get('repo') as string;
    this.path = this.route.snapshot.paramMap.get('path') as string;
    this.commitOrBranchOrTagName = this.route.snapshot.paramMap.get(
      'branch',
    ) as string;
    this.store.dispatch(
      fetchFileContents({
        owner: this.owner,
        repoName: this.repoName,
        path: this.path,
        commitOrBranchOrTagName: this.commitOrBranchOrTagName,
      }),
    );
  }
}
