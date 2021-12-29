import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCodeComponent } from './file-code.component';

describe('FileCodeComponent', () => {
  let component: FileCodeComponent;
  let fixture: ComponentFixture<FileCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileCodeComponent],
    }).compileComponents();
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
