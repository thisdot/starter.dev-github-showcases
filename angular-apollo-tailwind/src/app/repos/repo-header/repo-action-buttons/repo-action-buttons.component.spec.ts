import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoActionButtonsComponent } from './repo-action-buttons.component';

describe('RepoComponent', () => {
	let component: RepoActionButtonsComponent;
	let fixture: ComponentFixture<RepoActionButtonsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RepoActionButtonsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RepoActionButtonsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
