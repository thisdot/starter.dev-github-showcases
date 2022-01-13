import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerListContainerComponent } from './file-explorer-list-container.component';

describe('FileExplorerListContainerComponent', () => {
  let component: FileExplorerListContainerComponent;
  let fixture: ComponentFixture<FileExplorerListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorerListContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
