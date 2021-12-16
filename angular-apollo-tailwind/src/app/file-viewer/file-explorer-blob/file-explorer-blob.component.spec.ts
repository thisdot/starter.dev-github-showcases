import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileExplorerBlobComponent } from './file-explorer-blob.component';

describe('FileExplorerBlobComponent', () => {
  let component: FileExplorerBlobComponent;
  let fixture: ComponentFixture<FileExplorerBlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorerBlobComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
