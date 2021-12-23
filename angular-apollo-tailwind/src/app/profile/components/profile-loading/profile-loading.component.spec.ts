import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLoadingComponent } from './profile-loading.component';

describe('ProfileLoadingComponent', () => {
  let component: ProfileLoadingComponent;
  let fixture: ComponentFixture<ProfileLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
