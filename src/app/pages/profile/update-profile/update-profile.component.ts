import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  UpdateProfile() {
    console.log('actualizar perfil...')
    document.getElementById('modal-1').setAttribute('open', 'true')
  }

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('/dashboard/perfil');
  }

}
