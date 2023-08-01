import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoReadMeComponent } from './repo-read-me.component';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('RepoReadMeComponent', () => {
  let component: RepoReadMeComponent;
  let fixture: ComponentFixture<RepoReadMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      declarations: [RepoReadMeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoReadMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
