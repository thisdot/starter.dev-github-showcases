import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelativeTimePipe } from '../../pipes/relative-time.pipe';

import { RepoCardComponent } from './repo-card.component';

describe('RepoCardComponent', () => {
  let component: RepoCardComponent;
  let fixture: ComponentFixture<RepoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoCardComponent, RelativeTimePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCardComponent);
    component = fixture.componentInstance;
    component.repo = {
      name: '',
      stargazers_count: 0,
      forks_count: 0,
      private: false,
      updated_at: '',
      owner: {
        login: '',
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map known language colors', () => {
    expect(component.repo).toBeDefined();

    if (component.repo) {
      component.repo.language = 'JavaScript';
      expect(component.languageColor).toBe('#f1e05a');
      component.repo.language = 'TypeScript';
      expect(component.languageColor).toBe('#2b7489');
      component.repo.language = 'CSS';
      expect(component.languageColor).toBe('#563d7c');
      component.repo.language = 'Ruby';
      expect(component.languageColor).toBe('#701516');
      component.repo.language = 'Python';
      expect(component.languageColor).toBe('#3572A5');
      component.repo.language = 'Rust';
      expect(component.languageColor).toBe('#dea584');
      component.repo.language = 'C';
      expect(component.languageColor).toBe('#555555');
    }
  });

  it('should map unknown language colors to #000', () => {
    expect(component.repo).toBeDefined();

    if (component.repo) {
      component.repo.language = 'MagicScriptByApplesoft';
      expect(component.languageColor).toBe('#000');
      component.repo.language = 'JabaScript';
      expect(component.languageColor).toBe('#000');
    }
  });
});
