import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerRootComponent } from './file-explorer-root.component';
import { FileExplorerAboutComponent } from './components/file-explorer-about/file-explorer-about.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteConfigService } from '@this-dot/route-config';
import { of } from 'rxjs';

describe('FileExplorerRootComponent', () => {
  let component: FileExplorerRootComponent;
  let fixture: ComponentFixture<FileExplorerRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FileExplorerRootComponent, FileExplorerAboutComponent],
      providers: [
        {
          provide: RouteConfigService,
          useValue: {
            getLeafConfig: () => of(),
          },
        },
      ],
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
