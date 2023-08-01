import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTabNavigationComponent } from './repo-tab-navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepoTabNavigationComponent', () => {
  let component: RepoTabNavigationComponent;
  let fixture: ComponentFixture<RepoTabNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RepoTabNavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoTabNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
