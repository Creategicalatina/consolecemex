import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateDocumentsComponent } from './update-documents/update-documents.component';



@NgModule({
  declarations: [
    UpdateProfileComponent,
    UpdateDocumentsComponent,
  ],
  exports: [
    UpdateProfileComponent,
    UpdateDocumentsComponent,
  ],
  imports: [
    CommonModule,
    CmxWebComponentsModule.forRoot(),
  ]
})
export class ProfileModule { }
