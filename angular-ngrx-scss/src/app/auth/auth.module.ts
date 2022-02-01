import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
  declarations: [AuthComponent, RedirectComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
