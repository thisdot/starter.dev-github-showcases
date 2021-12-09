import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPulseDotsComponent } from './loading-pulse-dots.component';

describe('LoadingPulseDotsComponent', () => {
  let component: LoadingPulseDotsComponent;
  let fixture: ComponentFixture<LoadingPulseDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingPulseDotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingPulseDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
