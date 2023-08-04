import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileExplorerNavComponent } from './file-explorer-nav.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FileExplorerComponent } from '../file-explorer/file-explorer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FileExplorerNavComponent', () => {
  let component: FileExplorerNavComponent;
  let fixture: ComponentFixture<FileExplorerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FileExplorerNavComponent, FileExplorerComponent],
    })
      .overrideComponent(FileExplorerNavComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.owner = 'thisdot';
    component.name = 'starter.dev-github-showcases';
    component.branch = 'main';
    component.path = 'README.md';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render branch dropdown button', () => {
    const branchBtnEl: HTMLButtonElement = fixture.debugElement.query(
      By.css('button'),
    ).nativeElement;

    expect(branchBtnEl.innerText).toContain('main');
  });

  it('should render breadcrumb accurately', () => {
    const crumbsEl: HTMLElement = fixture.debugElement.query(
      By.css('.crumbs'),
    ).nativeElement;

    expect(crumbsEl.innerText).toMatch(
      /starter\.dev-github-showcases\s*\/\s*README.md/,
    );
  });

  it('should generate correct url when "getHref" is called', () => {
    expect(component.getHref(0)).toContain('tree/main/README.md');
  });
});
