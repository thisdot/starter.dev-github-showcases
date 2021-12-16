import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileExplorerNavComponent } from './file-explorer-nav.component';

describe('FileExplorerNavComponent', () => {
  let component: FileExplorerNavComponent;
  let fixture: ComponentFixture<FileExplorerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorerNavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
