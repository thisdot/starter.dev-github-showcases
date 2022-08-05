import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTextComponent } from './file-text.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FileTextComponent', () => {
  let component: FileTextComponent;
  let fixture: ComponentFixture<FileTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileTextComponent],
    })
      .overrideComponent(FileTextComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTextComponent);
    component = fixture.componentInstance;
    component.text = `this is a dummy line of text`;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render file text content', function () {
    const codeBlockEl: HTMLElement = fixture.debugElement.query(
      By.css('pre'),
    ).nativeElement;

    expect(codeBlockEl.innerText).toContain('this is a dummy line of text');
  });
});
