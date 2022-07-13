import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerRootComponent } from './file-explorer-root.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('FileExplorerRootComponent', () => {
  let component: FileExplorerRootComponent;
  let fixture: ComponentFixture<FileExplorerRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FileExplorerRootComponent],
      providers: [provideMockStore()],
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
