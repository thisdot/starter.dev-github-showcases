import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutComponent } from './profile-about.component';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('ProfileAboutComponent', () => {
  let component: ProfileAboutComponent;
  let fixture: ComponentFixture<ProfileAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      declarations: [ProfileAboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAboutComponent);
    component = fixture.componentInstance;
    component.profile = {
      owner: 'test',
      isOrg: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
