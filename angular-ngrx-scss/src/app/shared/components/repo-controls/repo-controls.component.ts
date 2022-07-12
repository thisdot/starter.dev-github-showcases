import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  combineLatest,
  Observable,
} from 'rxjs';
import { startWith } from 'rxjs/operators';
import { setSortAndFilterProperties } from 'src/app/state/profile/profile.actions';
import { SortAndFilterState } from 'src/app/state/profile/profile.state';

@Component({
  selector: 'app-repo-controls',
  templateUrl: './repo-controls.component.html',
  styleUrls: ['./repo-controls.component.scss'],
})
export class RepoControlsComponent implements OnInit {
  searchInput = new FormControl('');
  // form: FormGroup = new FormGroup({
  //   searchInput: new FormControl(''),
  // });

  // @Output() setSearch = new EventEmitter<string>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    const searchInput$ = this.searchInput.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      startWith(''),
    );

    combineLatest([searchInput$], (text) => ({
      search: text,
      type: '',
      language: '',
      sort: '',
    })).subscribe((criteria: SortAndFilterState) => {
      console.log('searching with ' + JSON.stringify(criteria));
      this.store.dispatch(setSortAndFilterProperties({ filters: criteria }));
    });
  }
}
