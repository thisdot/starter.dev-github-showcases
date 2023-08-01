import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestsComponent } from './pull-requests.component';
import { RouteConfigService } from '@this-dot/route-config';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('PullRequestsComponent', () => {
  let component: PullRequestsComponent;
  let fixture: ComponentFixture<PullRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      declarations: [PullRequestsComponent],
      providers: [RouteConfigService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
