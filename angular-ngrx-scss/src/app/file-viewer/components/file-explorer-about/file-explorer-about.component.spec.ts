import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerAboutComponent } from './file-explorer-about.component';
import { By } from '@angular/platform-browser';
import { RepoState } from '../../../state/repository';
import { ChangeDetectionStrategy } from '@angular/core';

describe('FileExplorerAboutComponent', () => {
  let component: FileExplorerAboutComponent;
  let fixture: ComponentFixture<FileExplorerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorerAboutComponent],
    })
      .overrideComponent(FileExplorerAboutComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "about" title', () => {
    const headerEL: HTMLHeadElement = fixture.debugElement.query(
      By.css('h2'),
    ).nativeElement;

    expect(headerEL.innerText).toBe('About');
  });

  describe('description', () => {
    it('should render description fallback text if it does not exist', () => {
      const descriptionEL: HTMLElement = fixture.debugElement.query(
        By.css('.description'),
      ).nativeElement;
      expect(descriptionEL.innerText).toContain(
        'No description, website, or topics provided.',
      );
    });

    it('should render description text if it exists', () => {
      component.repo = {
        description: 'this is a piece of dummy test',
      } as RepoState;

      fixture.detectChanges();

      const descriptionEL: HTMLElement = fixture.debugElement.query(
        By.css('.description'),
      ).nativeElement;
      expect(descriptionEL.innerText).toContain(
        'this is a piece of dummy test',
      );
    });
  });

  describe('homepageUrl', () => {
    it('should not render homepageUrl link if it does not exist', () => {
      const homepageUrlEL = fixture.debugElement.query(
        By.css('.linkContainer'),
      );
      expect(homepageUrlEL).toBeFalsy();
    });

    it('should render homepageUrl link if it exists', () => {
      component.repo = {
        website: 'dummy url',
      } as RepoState;

      fixture.detectChanges();

      const homepageUrlEL: HTMLElement = fixture.debugElement.query(
        By.css('.linkContainer'),
      ).nativeElement;
      expect(homepageUrlEL.innerText).toContain('dummy url');
    });
  });

  describe('topics', () => {
    it('should not render topic tags if it does not exist', () => {
      const topicSpanEL = fixture.debugElement.queryAll(By.css('.topic'));
      expect(topicSpanEL.length).toEqual(0);
    });

    it('should render topic tags if they exist', () => {
      component.repo = {
        tags: ['dummy tag'],
      } as RepoState;

      fixture.detectChanges();

      const topicSpanEL = fixture.debugElement.queryAll(By.css('.topic'));
      expect(topicSpanEL.length).toEqual(1);
    });
  });
});
