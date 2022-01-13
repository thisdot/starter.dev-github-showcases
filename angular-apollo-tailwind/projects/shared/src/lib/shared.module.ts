import { NgModule } from '@angular/core';
import {
  ContentLoadingModule,
  CountButtonGroupComponentModule,
  ContainerComponentModule,
  DataContainerComponentModule,
  IconsModule,
} from './components';
import { PipesModule } from './pipes';

@NgModule({
  declarations: [],
  imports: [
    ContainerComponentModule,
    DataContainerComponentModule,
    ContentLoadingModule,
    IconsModule,
    CountButtonGroupComponentModule,
    ContentLoadingModule,
    PipesModule,
  ],
  exports: [],
})
export class SharedModule {}
