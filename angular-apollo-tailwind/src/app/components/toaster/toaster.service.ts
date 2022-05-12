import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastEvent } from './toaster.model';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  showToast(toast: ToastEvent) {
    this._toastEvents.next(toast);
  }
}
