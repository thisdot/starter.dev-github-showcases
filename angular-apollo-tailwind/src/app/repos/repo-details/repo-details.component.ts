import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { concatMap, map, Observable, of, tap } from 'rxjs';
import { ResolvedRepoDetails } from 'src/app/gql';
import {
  FileExplorerData,
  FileExplorerVars,
  FileExplorer,
  RepoTree as Tree,
  TreeEntry,
} from 'src/app/gql/models/file-explorer';
import { REPO_TREE_QUERY } from 'src/app/gql/queries/file-explorer.query';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
})
export class RepoDetailsComponent {
  repoDetails$: Observable<FileExplorer> = this.route.data.pipe(
    map(({ userDetails }) => ({ ...userDetails } as ResolvedRepoDetails)),
    concatMap(({ owner, name, branch, path, repository }) =>
      this.apollo
        .watchQuery<FileExplorerData, FileExplorerVars>({
          query: REPO_TREE_QUERY,
          variables: {
            owner,
            name,
            expression: `${branch}:${path}`,
          },
        })
        .valueChanges.pipe(
          map((res) => ({
            ...res,
            owner,
            name,
            branch,
            items: this.parseQueryData(res.data.repository.tree),
            basePath: `/${owner}/${name}`,
            description: repository.description,
          }))
          // TODO: enable for breadcrumbs
          // tap((repo) => {
          //   const path = repo.tree.entries.path;
          //   this.crumbs = path.split('/').filter(Boolean);
          //   this.crumbPath = this.crumbs.join('/'); // make pipe?
          //   this.href = `/${this.owner}/${this.name}/tree/${this.branch}/${this.crumbPath}`;
          // })
        )
    )
  );

  // TODO: enable for breadcrumbs
  // crumbs: string[] = [];
  // crumbPath: string = '';
  // href: string = '';

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  parseQueryData(tree: Tree) {
    const items: TreeEntry[] =
      tree.entries.map(({ name, path, type }) => {
        return {
          name,
          path: path ?? '',
          type,
        };
      }) ?? [];
    return items.sort((a, b) => {
      if (a.type === 'tree' && b.type !== 'tree') {
        return -1;
      }
      if (a.type !== 'tree' && b.type === 'tree') {
        return 1;
      }
      return a.name.localeCompare(b.name);
    });
  }
}
