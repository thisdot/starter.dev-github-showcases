import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTextComponent } from './file-text.component';

describe('FileTextComponent', () => {
  let component: FileTextComponent;
  let fixture: ComponentFixture<FileTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
