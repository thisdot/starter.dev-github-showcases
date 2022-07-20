import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { RouterModule } from '@angular/router';
import { OcticonsDirective } from './directives/octicons.directive';

@NgModule({
  declarations: [RepoCardComponent, RelativeTimePipe, OcticonsDirective],
  imports: [CommonModule, RouterModule],
  exports: [RepoCardComponent, RelativeTimePipe, OcticonsDirective],
})
export class SharedModule {}
