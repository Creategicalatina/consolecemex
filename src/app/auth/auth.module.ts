import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { ComponentsModule } from '../components/components.module';

// Componentes
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
  ],
  exports: [
    LoginComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CmxWebComponentsModule.forRoot()
  ]
})
export class AuthModule { }
