import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // TODO: most likely will come from apollo and not as an obs
  user$: Observable<{
    username: string;
    image: string;
  }> = of({
    username: 'morgnism',
    image: '',
    repositories: [
      {
        name: 'dotfiles',
      },
    ],
  });
}
