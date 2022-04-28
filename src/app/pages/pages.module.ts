import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DriverModule } from './driver/driver.module';
import { ProfileModule } from './profile/profile.module';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyTravelsComponent } from './my-travels/my-travels.component';
import { DriverComponent } from './driver/driver.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    DriverComponent,
    MyTravelsComponent,
    VehiclesComponent,
    ProfileComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    DriverComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DriverModule,
    ProfileModule,
    CmxWebComponentsModule.forRoot()
  ]
})
export class PagesModule { }
