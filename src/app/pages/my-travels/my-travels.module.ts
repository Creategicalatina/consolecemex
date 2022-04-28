import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details/trip-details.component';



@NgModule({
  declarations: [
    TripDetailsComponent,
  ],
  exports: [
    TripDetailsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MyTravelsModule { }
