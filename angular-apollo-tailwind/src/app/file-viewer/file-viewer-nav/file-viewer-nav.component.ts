import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-file-viewer-nav',
	templateUrl: './file-viewer-nav.component.html',
	styleUrls: ['./file-viewer-nav.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileViewerNavComponent {
	@Input() owner = '';
	@Input() name = '';
	@Input() branch = 'master';
	@Input() path = '';

	crumbs: string[] = [];
	crumbPath = '';
	href = '';

	// TODO: enable for breadcrumbs
	// tap((repo) => {
	//   const path = repo.tree.entries.path;
	//   this.crumbs = path.split('/').filter(Boolean);
	//   this.crumbPath = this.crumbs.join('/'); // make pipe?
	//   this.href = `/${this.owner}/${this.name}/tree/${this.branch}/${this.crumbPath}`;
	// })
}
