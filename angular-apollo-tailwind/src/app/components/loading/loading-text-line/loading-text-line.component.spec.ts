import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTextLineComponent } from './loading-text-line.component';

describe('LoadingTextLineComponent', () => {
	let component: LoadingTextLineComponent;
	let fixture: ComponentFixture<LoadingTextLineComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoadingTextLineComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LoadingTextLineComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
