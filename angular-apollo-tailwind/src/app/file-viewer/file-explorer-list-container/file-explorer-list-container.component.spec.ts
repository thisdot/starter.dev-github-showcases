import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerListContainerComponent } from './file-explorer-list-container.component';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('FileExplorerListContainerComponent', () => {
  let component: FileExplorerListContainerComponent;
  let fixture: ComponentFixture<FileExplorerListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
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
