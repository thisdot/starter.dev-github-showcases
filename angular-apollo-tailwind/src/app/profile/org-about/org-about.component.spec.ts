import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgProfileAboutComponent } from './org-about.component';

describe('OrgProfileComponent', () => {
  let component: OrgProfileAboutComponent;
  let fixture: ComponentFixture<OrgProfileAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgProfileAboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgProfileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
