import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ToasterType } from './toaster.model';

export interface ToasterState {
  showToaster: boolean;
  title: string;
  message: string;
  type: ToasterType;
}

const INITIAL_STATE: ToasterState = {
  showToaster: false,
  title: '',
  message: '',
  type: ToasterType.INFO,
};

@Injectable()
export class ProfileReposFilterStore extends ComponentStore<ToasterState> {
  // *********** Updaters *********** //

  readonly showToaster = this.updater((state, showToaster: boolean) => ({
    ...state,
    showToaster,
  }));

  // *********** Selectors *********** //

  readonly languages$ = this.select(({ showToaster }) => showToaster);

  constructor() {
    super(INITIAL_STATE);
  }
}
