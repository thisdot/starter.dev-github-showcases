import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRepoListItemComponent } from './profile-repo-list-item.component';

describe('ProfileRepoListItemComponent', () => {
  let component: ProfileRepoListItemComponent;
  let fixture: ComponentFixture<ProfileRepoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileRepoListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRepoListItemComponent);
    component = fixture.componentInstance;
    component.item = {} as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
