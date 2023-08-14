import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerComponent } from './file-explorer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../../state';
import { RepositoryState } from '../../state/repository';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { FileExplorerAboutComponent } from '../components/file-explorer-about/file-explorer-about.component';
import { FileExplorerContainerComponent } from '../file-explorer-container/file-explorer-container.component';
import { FileExplorerNavComponent } from '../file-explorer-nav/file-explorer-nav.component';
import { OcticonsDirective } from '../../shared/directives/octicons.directive';
import { ReadMeComponent } from '../read-me/read-me.component';
import { CommonModule } from '@angular/common';

describe('FileExplorerComponent', () => {
  let component: FileExplorerComponent;
  let fixture: ComponentFixture<FileExplorerComponent>;
  const initialState: AppState = {
    repository: {
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
    } as RepositoryState,
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
    snapshot: {
      fragment: '',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [
        FileExplorerComponent,
        FileExplorerAboutComponent,
        FileExplorerContainerComponent,
        FileExplorerNavComponent,
        ReadMeComponent,
        OcticonsDirective,
      ],
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
