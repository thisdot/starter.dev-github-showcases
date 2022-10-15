import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerContainerComponent } from './file-explorer-container.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FileExplorerContainerComponent', () => {
  let component: FileExplorerContainerComponent;
  let fixture: ComponentFixture<FileExplorerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorerContainerComponent],
    })
      .overrideComponent(FileExplorerContainerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.repoPage = [
      {
        name: '.github',
        type: 'file',
        path: '.github',
        content: '',
        encoding: '',
        size: 0,
      },
      {
        name: 'packages',
        type: 'dir',
        path: 'packages',
        content: '',
        encoding: '',
        size: 0,
      },
    ];
    component.name = 'starter.dev-github-showcases';
    component.owner = 'thisdot';
    component.branch = 'main';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of files and folders', () => {
    const folderItems = fixture.debugElement.queryAll(By.css('.item'));

    expect(folderItems.length).toBe(2);
  });

  it('should generate accurate url for files', () => {
    expect(
      component.getPathHref({
        name: 'README.md',
        type: 'file',
        path: 'README.md',
        content: '',
        encoding: '',
        size: 0,
      }),
    ).toEqual('/thisdot/starter.dev-github-showcases/blob/main/README.md');
  });

  it('should generate accurate url for files', () => {
    expect(
      component.getPathHref({
        name: '.github',
        type: 'dir',
        path: '.github',
        content: '',
        encoding: '',
        size: 0,
      }),
    ).toEqual('/thisdot/starter.dev-github-showcases/tree/main/.github');
  });
});
