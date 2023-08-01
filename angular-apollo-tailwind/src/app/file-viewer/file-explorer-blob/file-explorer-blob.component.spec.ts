import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileExplorerBlobComponent } from './file-explorer-blob.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteConfigService } from '@this-dot/route-config';

describe('FileExplorerBlobComponent', () => {
  let component: FileExplorerBlobComponent;
  let fixture: ComponentFixture<FileExplorerBlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FileExplorerBlobComponent],
      providers: [RouteConfigService],
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
