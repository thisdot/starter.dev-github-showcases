import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TreeEntry } from 'src/app/gql/models/file-explorer';

const removeLastPathPart = (path: string) => {
	const pathParts = path.split('/');
	return pathParts.slice(0, pathParts.length - 1).join('/');
};

@Component({
	selector: 'app-file-explorer',
	templateUrl: './file-explorer.component.html',
	styleUrls: ['./file-explorer.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerComponent {
	@Input() items: TreeEntry[] = [];
	@Input() branch = '';
	@Input() basePath = '';
	@Input() repoPath = '';
	@Input() isLoaded = false;

	getBackLink(repoPath: string) {
		const backPath = removeLastPathPart(repoPath);
		return `${this.basePath}/tree/${this.branch}/${backPath}`;
	}

	getPathHref(item: TreeEntry): string {
		return `${this.basePath}/${item.type}/${this.branch}/${item.path}`;
	}
}
