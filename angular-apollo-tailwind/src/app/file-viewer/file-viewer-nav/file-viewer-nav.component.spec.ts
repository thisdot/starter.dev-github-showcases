import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileViewerNavComponent } from './file-viewer-nav.component';

describe('FileViewerNavComponent', () => {
  let component: FileViewerNavComponent;
  let fixture: ComponentFixture<FileViewerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileViewerNavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileViewerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
