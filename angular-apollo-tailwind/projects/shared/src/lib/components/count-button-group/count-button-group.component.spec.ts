import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountButtonGroupComponent } from './count-button-group.component';

describe('CountButtonGroupComponent', () => {
  let component: CountButtonGroupComponent;
  let fixture: ComponentFixture<CountButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountButtonGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
