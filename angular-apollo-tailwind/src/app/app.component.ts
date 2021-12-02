import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // TODO: most likely will come from apollo and not as an obs
  user$: Observable<{
    username: string;
    image: string;
  }> = of({
    username: '',
    image: '',
  });
}
