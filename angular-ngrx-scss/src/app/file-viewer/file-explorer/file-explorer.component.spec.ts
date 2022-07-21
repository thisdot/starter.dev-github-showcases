import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerComponent } from './file-explorer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../../state';
import { RepoState } from '../../state/repository';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('FileExplorerComponent', () => {
  let component: FileExplorerComponent;
  let fixture: ComponentFixture<FileExplorerComponent>;
  const initialState: AppState = {
    repo: {
      tree: [
        {
          name: 'packages',
          type: 'dir',
          path: 'packages',
        },
      ],
      activeBranch: 'main',
      description: '',
      website: '',
    } as RepoState,
  } as AppState;
  const activatedRouteStub = {
    paramMap: of({
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
            return undefined;
        }
      },
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FileExplorerComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render subcomponents', () => {
    const fileExplorerNavEl: HTMLElement = fixture.debugElement.query(
      By.css('app-file-explorer-nav'),
    ).nativeElement;
    const fileExplorerContainerEl: HTMLElement = fixture.debugElement.query(
      By.css('app-file-explorer-container'),
    ).nativeElement;
    const fileExplorerAboutEl: HTMLElement = fixture.debugElement.query(
      By.css('app-file-explorer-about'),
    ).nativeElement;

    expect(fileExplorerNavEl).toBeTruthy();
    expect(fileExplorerContainerEl).toBeTruthy();
    expect(fileExplorerAboutEl).toBeTruthy();
  });
});
