import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoHeadingComponent } from './repo-heading.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepoHeadingComponent', () => {
  let component: RepoHeadingComponent;
  let fixture: ComponentFixture<RepoHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RepoHeadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
