import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;

  constructor( 
    private router: Router,
    private userService: UserService ) { }

  ngOnInit(): void {
    this.currentUser = this.userService.user;
  }

  updateInfoUser() {
    console.log('actualizar la informacion del usuario...');
    this.router.navigateByUrl('dashboard/perfil/actualizar-perfil');
  }

  /* updateDocuments() {
    console.log('Actualizar los documentos....');
    this.router.navigateByUrl('dashboard/perfil/actualizar-documentos');
  } */

  yourTripCemex() {
    console.log('Ir a a tu viaje CEMEX....');     
  }

  goCleverGlobal() {
    console.log('Ir a clever global....');     
  }
}
