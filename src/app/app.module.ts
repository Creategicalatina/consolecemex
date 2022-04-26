import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

// Componentes
import { NotFoundComponent } from './not-found/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,       
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    SharedModule,
    CmxWebComponentsModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
