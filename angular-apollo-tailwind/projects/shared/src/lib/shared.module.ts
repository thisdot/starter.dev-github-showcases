import { NgModule } from '@angular/core';
import {
  ContentLoadingModule,
  CountButtonGroupComponentModule,
  ContainerComponentModule,
  DataContainerComponentModule,
  IconsModule,
  ErrorBlockComponentModule,
} from './components';
import { PipesModule } from './pipes';

@NgModule({
  declarations: [],
  imports: [
    ContainerComponentModule,
    DataContainerComponentModule,
    ErrorBlockComponentModule,
    ContentLoadingModule,
    IconsModule,
    CountButtonGroupComponentModule,
    ContentLoadingModule,
    PipesModule,
  ],
  exports: [],
})
export class SharedModule {}
