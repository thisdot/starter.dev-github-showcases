import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLineLoadingComponent } from './text-line-loading.component';

describe('TextLineLoadingComponent', () => {
  let component: TextLineLoadingComponent;
  let fixture: ComponentFixture<TextLineLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextLineLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLineLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
