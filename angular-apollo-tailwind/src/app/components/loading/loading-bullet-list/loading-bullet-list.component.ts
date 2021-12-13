import { Component } from '@angular/core';

@Component({
	selector: 'app-loading-bullet-list',
	template: `<content-loader
		[speed]="2"
		[style]="{ width: '400px', height: '20px' }"
		viewBox="-10 5 400 28"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<svg:circle cx="10" cy="20" r="8" />
		<svg:rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
	</content-loader>`,
})
export class LoadingBulletListComponent {}
