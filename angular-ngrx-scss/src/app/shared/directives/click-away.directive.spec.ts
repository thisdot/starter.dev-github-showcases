import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClickAwayDirective } from './click-away.directive';

class MockElementRef {}

@Component({
  template: '<button [appClickAway]="handleClickAway">Test</button>',
})
export class ButtonComponent {
  handleClickAway = () => undefined;
}

describe('ClickAwayDirective', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let inputEl: DebugElement;
  let clickAwaySpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent, ClickAwayDirective],
      providers: [
        ClickAwayDirective,
        { provide: ElementRef, useClass: MockElementRef },
      ],
    });

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('button'));
    clickAwaySpy = spyOn(component, 'handleClickAway');

    fixture.detectChanges();
  });

  it('should call the click away callback when a click is dispatched in the document', () => {
    document.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(clickAwaySpy).toHaveBeenCalled();
  });

  it('should not call the click away callback when a click is dispatched on the button', () => {
    inputEl.nativeElement.dispatchEvent(
      new MouseEvent('click', { bubbles: true }),
    );
    fixture.detectChanges();
    expect(clickAwaySpy).not.toHaveBeenCalled();
  });
});
