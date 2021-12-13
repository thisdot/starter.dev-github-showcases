import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingBulletListComponent } from './loading-bullet-list.component';

describe('LoadingBulletListComponent', () => {
	let component: LoadingBulletListComponent;
	let fixture: ComponentFixture<LoadingBulletListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoadingBulletListComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LoadingBulletListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
