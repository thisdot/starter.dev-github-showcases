import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgProfileComponent } from './org-profile.component';

describe('OrgProfileComponent', () => {
  let component: OrgProfileComponent;
  let fixture: ComponentFixture<OrgProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
