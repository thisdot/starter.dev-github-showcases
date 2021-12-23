import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataContainerComponent } from './data-container.component';

describe('DataContainerComponent', () => {
  let component: DataContainerComponent;
  let fixture: ComponentFixture<DataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
