import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

// Componentes
import { TabDriversComponent } from './components/tab-drivers/tab-drivers.component';
import { TabRequestComponent } from './components/tab-request/tab-request.component';
import { NewDriverComponent } from './new-driver/new-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { UpdateDocumentsDriverComponent } from './update-documents-driver/update-documents-driver.component';
import { UploadFilesComponent } from '../components/upload-files/upload-files.component';


@NgModule({
  declarations: [
    TabDriversComponent,
    TabRequestComponent,
    NewDriverComponent,
    UpdateDriverComponent,
    UpdateDocumentsDriverComponent,
    UploadFilesComponent,
  ],
  exports: [
    TabDriversComponent,
    TabRequestComponent,
  ],
  imports: [
    CommonModule,
    CmxWebComponentsModule.forRoot(),
  ]
})
export class DriverModule { }