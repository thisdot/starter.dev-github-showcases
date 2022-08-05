import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileViewerComponent } from './file-viewer.component';
import { ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FileCodeComponent } from '../components/file-code/file-code.component';
import { FileTextComponent } from '../components/file-text/file-text.component';
import { By } from '@angular/platform-browser';
import { Language } from '@prism';

describe('FileViewerComponent', () => {
  let component: FileViewerComponent;
  let fixture: ComponentFixture<FileViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileViewerComponent, FileCodeComponent, FileTextComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .overrideComponent(FileViewerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileViewerComponent);
    component = fixture.componentInstance;
    component.fileContent = {
      name: 'app.ts',
      size: 223,
      type: 'file',
      content: 'console.log("hello world")',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render file data in header', () => {
    const headerEl: HTMLElement = fixture.debugElement.query(
      By.css('.fileHeader'),
    ).nativeElement;
    expect(headerEl.innerText).toContain('1 lines223 Bytes');
  });

  it('should render code component', () => {
    const codeEl: HTMLElement = fixture.debugElement.query(
      By.css('app-file-code'),
    ).nativeElement;
    expect(codeEl).toBeTruthy();
  });

  it('should render text file component', () => {
    component.language = '' as Language;
    fixture.detectChanges();

    const textFileEl: HTMLElement = fixture.debugElement.query(
      By.css('app-file-text'),
    ).nativeElement;

    expect(textFileEl).toBeTruthy();
  });
});
