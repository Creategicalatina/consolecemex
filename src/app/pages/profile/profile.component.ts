import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  updateInfoUser() {
    console.log('actualizar la informacion del usuario...');
    this.router.navigateByUrl('dashboard/perfil/actualizar-perfil');
  }

  updateDocuments() {
    console.log('Actualizar los documentos....');
    this.router.navigateByUrl('dashboard/perfil/actualizar-documentos');
  }

  goCleverGlobal() {
    console.log('Ir a clever global....');     
  }
}
