import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgsListComponent } from './orgs-list.component';

describe('OrgsListComponent', () => {
  let component: OrgsListComponent;
  let fixture: ComponentFixture<OrgsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
