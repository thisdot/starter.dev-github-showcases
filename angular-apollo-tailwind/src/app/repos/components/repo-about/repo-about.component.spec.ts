import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoAboutComponent } from './repo-about.component';

describe('RepoAboutComponent', () => {
	let component: RepoAboutComponent;
	let fixture: ComponentFixture<RepoAboutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RepoAboutComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RepoAboutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
