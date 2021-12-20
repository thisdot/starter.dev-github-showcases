import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseDotsLoadingComponent } from './pulse-dots-loading.component';

describe('PulseDotsLoadingComponent', () => {
  let component: PulseDotsLoadingComponent;
  let fixture: ComponentFixture<PulseDotsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PulseDotsLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseDotsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
