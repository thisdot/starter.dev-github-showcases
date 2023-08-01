import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgProfileComponent } from './org-profile.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { OrgProfileGQL } from '../../gql';

describe('OrgProfileComponent', () => {
  let component: OrgProfileComponent;
  let fixture: ComponentFixture<OrgProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      declarations: [OrgProfileComponent],
      providers: [OrgProfileGQL],
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
