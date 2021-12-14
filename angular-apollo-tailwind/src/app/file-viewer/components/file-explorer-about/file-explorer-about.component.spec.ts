import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerAboutComponent } from './file-explorer-about.component';

describe('FileExplorerAboutComponent', () => {
  let component: FileExplorerAboutComponent;
  let fixture: ComponentFixture<FileExplorerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorerAboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
