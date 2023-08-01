import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMeComponent } from './read-me.component';
import { MarkdownPipe } from '@shared';

describe('ReadMeComponent', () => {
  let component: ReadMeComponent;
  let fixture: ComponentFixture<ReadMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadMeComponent, MarkdownPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
