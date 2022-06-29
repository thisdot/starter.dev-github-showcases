import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCardComponent } from './repo-card.component';

describe('RepoCardComponent', () => {
  let component: RepoCardComponent;
  let fixture: ComponentFixture<RepoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map known language colors', () => {
    expect(component.getColor('JavaScript')).toBe('#f1e05a');
    expect(component.getColor('TypeScript')).toBe('#2b7489');
    expect(component.getColor('CSS')).toBe('#563d7c');
    expect(component.getColor('Ruby')).toBe('#701516');
    expect(component.getColor('Python')).toBe('#3572A5');
    expect(component.getColor('Rust')).toBe('#dea584');
    expect(component.getColor('C')).toBe('#555555');
  });

  it('should map unknown language colors to #000', () => {
    expect(component.getColor('MagicScriptByApplesoft')).toBe('#000');
    expect(component.getColor('JabaScript')).toBe('#000');
  });
});
