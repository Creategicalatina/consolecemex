import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  showNameFile: boolean = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  createNewDriver() {
    console.log('crear nuevo conductor...')
    document.getElementById('modal-1').setAttribute('open', 'true');
  }

  // showCamera() {
  //   console.log('Mostrar la camara...');
  //   this.showNameFile = true;
  // }

  // uploadFile() {
  //   console.log('Cargar archivo...');
  //   this.showNameFile = true;
  // }

  // cancelFile() {
  //   console.log('Cancelar el archivo...');
  //   this.showNameFile = false;
  // }

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('/dashboard/driver');
  }

}
