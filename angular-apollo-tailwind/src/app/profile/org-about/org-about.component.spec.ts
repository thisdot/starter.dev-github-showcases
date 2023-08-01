import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgProfileAboutComponent } from './org-about.component';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('OrgAboutComponent', () => {
  let component: OrgProfileAboutComponent;
  let fixture: ComponentFixture<OrgProfileAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      declarations: [OrgProfileAboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgProfileAboutComponent);
    component = fixture.componentInstance;
    component.profile = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
