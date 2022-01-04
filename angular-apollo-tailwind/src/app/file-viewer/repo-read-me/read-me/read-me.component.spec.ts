import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMeComponent } from './read-me.component';

describe('ReadMeComponent', () => {
  let component: ReadMeComponent;
  let fixture: ComponentFixture<ReadMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadMeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
