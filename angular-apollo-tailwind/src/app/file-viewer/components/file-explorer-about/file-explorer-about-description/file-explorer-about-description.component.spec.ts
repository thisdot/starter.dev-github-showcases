import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerAboutDescriptionComponent } from './file-explorer-about-description.component';

describe('DescriptionComponent', () => {
  let component: FileExplorerAboutDescriptionComponent;
  let fixture: ComponentFixture<FileExplorerAboutDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorerAboutDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerAboutDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
