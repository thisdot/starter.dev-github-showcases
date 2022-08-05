import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCodeComponent } from './file-code.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('FileCodeComponent', () => {
  let component: FileCodeComponent;
  let fixture: ComponentFixture<FileCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileCodeComponent],
    })
      .overrideComponent(FileCodeComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
