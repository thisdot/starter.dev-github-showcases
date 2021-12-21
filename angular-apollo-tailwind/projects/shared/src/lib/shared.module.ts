import { NgModule } from '@angular/core';
import {
  ContentLoadingModule,
  CountButtonGroupComponentModule,
  IconsModule,
} from './components';
import { ContainerComponentModule } from './components/container/container.module';
import { PipesModule } from './pipes';

@NgModule({
  declarations: [],
  imports: [
    ContainerComponentModule,
    ContentLoadingModule,
    IconsModule,
    CountButtonGroupComponentModule,
    ContentLoadingModule,
    PipesModule,
  ],
  exports: [],
})
export class SharedModule {}
