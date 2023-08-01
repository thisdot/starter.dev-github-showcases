import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReposViewComponent } from './profile-repos-view.component';
import { RouteConfigService } from '@this-dot/route-config';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('ProfileReposViewComponent', () => {
  let component: ProfileReposViewComponent;
  let fixture: ComponentFixture<ProfileReposViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      declarations: [ProfileReposViewComponent],
      providers: [RouteConfigService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReposViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
