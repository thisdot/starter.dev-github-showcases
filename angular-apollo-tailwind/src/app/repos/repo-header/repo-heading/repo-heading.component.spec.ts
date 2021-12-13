import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoHeadingComponent } from './repo-heading.component';

describe('RepoHeadingComponent', () => {
	let component: RepoHeadingComponent;
	let fixture: ComponentFixture<RepoHeadingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RepoHeadingComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RepoHeadingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
