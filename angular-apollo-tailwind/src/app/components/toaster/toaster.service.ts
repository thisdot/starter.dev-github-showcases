import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ToastEvent } from './toaster.model';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor(private router: Router) {
    this.toastEvents = this._toastEvents.asObservable();
  }

  showToast(toast: ToastEvent) {
    this._toastEvents.next(toast);
  }

  goTo404(err: any) {
    this.router.navigate(['/404']);
  }
}
