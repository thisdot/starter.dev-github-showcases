import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerRootComponent } from './file-explorer-root.component';
import { FileExplorerAboutComponent } from './components/file-explorer-about/file-explorer-about.component';

describe('FileExplorerRootComponent', () => {
  let component: FileExplorerRootComponent;
  let fixture: ComponentFixture<FileExplorerRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorerRootComponent, FileExplorerAboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
