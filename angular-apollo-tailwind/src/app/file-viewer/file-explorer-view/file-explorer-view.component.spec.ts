import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerViewComponent } from './file-explorer-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteConfigService } from '@this-dot/route-config';

describe('FileExplorerViewComponent', () => {
  let component: FileExplorerViewComponent;
  let fixture: ComponentFixture<FileExplorerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FileExplorerViewComponent],
      providers: [RouteConfigService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
