import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerBlobComponent } from './file-explorer-blob.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppState } from '../../state';
import { fetchFileContents, RepositoryState } from '../../state/repository';
import { ActivatedRoute } from '@angular/router';
import { FileExplorerNavComponent } from '../file-explorer-nav/file-explorer-nav.component';
import { FileViewerComponent } from '../file-viewer/file-viewer.component';
import { By } from '@angular/platform-browser';

describe('FileExplorerBlobComponent', () => {
  let component: FileExplorerBlobComponent;
  let fixture: ComponentFixture<FileExplorerBlobComponent>;
  let store: MockStore;
  const initialState: AppState = {
    repository: {
      selectedFile: {
        content: 'this is a readme file',
        name: 'starter.dev-github-showcases',
        type: 'file',
        size: 223,
      },
    } as RepositoryState,
  } as AppState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        FileExplorerBlobComponent,
        FileExplorerNavComponent,
        FileViewerComponent,
      ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  switch (key) {
                    case 'owner':
                      return 'thisdot';
                    case 'repo':
                      return 'starter.dev-github-showcases';
                    case 'path':
                      return 'README.md';
                    case 'branch':
                      return 'main';
                    default:
                      return '';
                  }
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch "fetchFileContents" action when component is loaded', (done) => {
    store.scannedActions$.subscribe((action) => {
      expect(action).toEqual(
        fetchFileContents({
          commitOrBranchOrTagName: 'main',
          owner: 'thisdot',
          path: 'README.md',
          repoName: 'starter.dev-github-showcases',
        }),
      );
      done();
    });
  });

  it('should render file viewer and file explorer nav', () => {
    const fileExplorerNavEl: HTMLElement = fixture.debugElement.query(
      By.css('app-file-explorer-nav'),
    ).nativeElement;
    const fileViewerEl: HTMLElement = fixture.debugElement.query(
      By.css('app-file-viewer'),
    ).nativeElement;

    expect(fileExplorerNavEl).toBeTruthy();
    expect(fileViewerEl).toBeTruthy();
  });
});
