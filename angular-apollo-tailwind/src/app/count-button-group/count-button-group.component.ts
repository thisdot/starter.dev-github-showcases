import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-button-group',
  templateUrl: './count-button-group.component.html',
})
export class CountButtonGroupComponent implements OnInit {
  constructor() {
  }
  @Input() count?: number;

  ngOnInit(): void {}
}
// const { data } = useRepo();