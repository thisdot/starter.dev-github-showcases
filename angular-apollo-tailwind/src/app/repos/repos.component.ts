import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
})
export class ReposComponent {
  // TODO: most likely will come from apollo and not as an obs
  // user$: Observable<{
  //   username: string;
  //   image: string;
  // }> = of({
  //   username: 'morgnism',
  //   image: '',
  //   repositories: [
  //     {
  //       name: 'dotfiles',
  //     },
  //   ],
  // });
  user$: Observable<any> = of(null);
}
