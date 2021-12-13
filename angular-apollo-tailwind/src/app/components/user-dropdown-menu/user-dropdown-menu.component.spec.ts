import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDropdownMenuComponent } from './user-dropdown-menu.component';

describe('UserDropdownViewComponent', () => {
	let component: UserDropdownMenuComponent;
	let fixture: ComponentFixture<UserDropdownMenuComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UserDropdownMenuComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(UserDropdownMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
