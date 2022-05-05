import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Rol } from '../../interfaces/rol';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  listRoles: Rol[] = [];

  constructor( 
    private router: Router,
    private userService: UserService ) { }

  ngOnInit(): void { 
    if ( this.userService.roles.length ) {
      this.listRoles = this.userService.roles;
    } else {
      this.userService.getRoles().subscribe( roles => {
        this.listRoles = roles.reverse();
      });
    }
  }

  labelRol ( nameRol: string ) {
    switch( nameRol ) {
      case 'PoweUser': return 'Super administrador';
      case 'CemexAdminLogis': return 'Administrador CEMEX';
      case 'AdminLogis': return 'Administrador logístico';
      case 'ManTruck': return 'Hombre camión';
      case 'Driver': return 'Conductor';
    }
  }  

  changeRol( data ) {
    console.log('cambio: ', data.detail);
  }
  
  goUsers() {
    this.router.navigateByUrl('/dashboard/usuarios');
  }

}
