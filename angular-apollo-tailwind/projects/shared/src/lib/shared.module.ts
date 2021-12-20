import { NgModule } from '@angular/core';
import {
  ContentLoadingModule,
  CountButtonGroupComponentModule,
  IconsModule,
} from './components';
import { PipesModule } from './pipes';

@NgModule({
  declarations: [],
  imports: [
    ContentLoadingModule,
    IconsModule,
    CountButtonGroupComponentModule,
    ContentLoadingModule,
    PipesModule,
  ],
  exports: [],
})
export class SharedModule {}
