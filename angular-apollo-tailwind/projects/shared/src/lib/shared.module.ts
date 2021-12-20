import { NgModule } from '@angular/core';
import {
  ContentLoadingModule,
  CountButtonGroupComponentModule,
  FilterDropdownModule,
  IconsModule,
  PaginationModule,
  PrivacyIconComponentModule,
  UserDropdownMenuComponentModule,
} from './components';
import { PipesModule } from './pipes/pipe.module';

@NgModule({
  declarations: [],
  imports: [
    ContentLoadingModule,
    IconsModule,
    CountButtonGroupComponentModule,
    FilterDropdownModule,
    ContentLoadingModule,
    PaginationModule,
    PrivacyIconComponentModule,
    UserDropdownMenuComponentModule,
    PipesModule,
  ],
  exports: [],
})
export class SharedModule {}
