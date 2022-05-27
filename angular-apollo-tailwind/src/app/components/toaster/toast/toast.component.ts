import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { bounceInRight, bounceOutRight } from 'ng-animate';
import { ToasterType, ToastEvent } from '../toaster.model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger('showToasterAnimation', [
      state('show', style({})),
      state(
        'hide',
        style({
          opacity: 0,
        }),
      ),
      transition(
        'hide => show',
        useAnimation(bounceInRight, {
          params: {
            timing: 2,
          },
        }),
      ),
      transition(
        'show => hide',
        useAnimation(bounceOutRight, {
          params: {
            timing: 2,
          },
        }),
      ),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  @Output() disposeEvent = new EventEmitter();

  @Input() toast: ToastEvent = {
    title: '',
    message: '',
    type: ToasterType.INFO,
  };

  time = 15000;
  progress = '0%';

  showToaster = false;

  ngOnInit(): void {
    this._showToaster();
  }

  _showToaster() {
    this.progress = '0%';
    this.showToaster = true;
    let timeElapsed = 0;
    const interval = setInterval(() => {
      timeElapsed += 10;
      const progress = (timeElapsed / this.time) * 100;
      this.progress = `${progress}%`;
      if (timeElapsed >= this.time) {
        this.showToaster = false;
        this.disposeEvent.emit();
        clearInterval(interval);
      }
    }, 10);
  }
}
