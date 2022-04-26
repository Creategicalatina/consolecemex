import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-drivers',
  templateUrl: './tab-drivers.component.html',
  styleUrls: ['./tab-drivers.component.css']
})
export class TabDriversComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  editarDriver() {
    console.log('aqui editamos el driver...')
    this.router.navigateByUrl('dashboard/driver/actualizar-conductor');
  }

  updateDocsDriver() {
    console.log('aqui actulaizamos los documentos del driver...')
    this.router.navigateByUrl('dashboard/driver/actualizar-documentos');
  }

  assignAppointment() {
    console.log('aqui asignamos una cita al driver...')
  }

}
