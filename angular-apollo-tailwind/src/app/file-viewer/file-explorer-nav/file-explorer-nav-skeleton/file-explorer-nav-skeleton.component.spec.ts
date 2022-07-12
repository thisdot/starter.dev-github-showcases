import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileExplorerNavSkeletonComponent } from './file-explorer-nav-skeleton.component';

describe('FileExplorerNavSkeletonComponent', () => {
  let component: FileExplorerNavSkeletonComponent;
  let fixture: ComponentFixture<FileExplorerNavSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorerNavSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerNavSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
