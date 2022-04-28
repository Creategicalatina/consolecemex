import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  loading: boolean = false;

  formUserUpdate: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required ]],
    lastName: ['', [ Validators.required ]],
    phone: ['', [ Validators.required ]],
    email: ['', [ Validators.required ]],
    identification: ['', [ Validators.required ]],
    term: [false, [ Validators.requiredTrue ]]
  });

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router ) { }

  ngOnInit(): void { }

  getStatusField( field: string ) {
    if ( this.formUserUpdate.controls[field].errors && this.formUserUpdate.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formUserUpdate.controls[field].errors && this.formUserUpdate.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  goProfile() {
    this.router.navigateByUrl('/dashboard/perfil');
  }

  UpdateProfile() {
    console.log('actualizar perfil...')
    if ( this.formUserUpdate.invalid ) {
      this.formUserUpdate.markAllAsTouched();
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.formUserUpdate.reset();
      document.getElementById('modal-1').setAttribute('open', 'true');
    }, 3000);
  }

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('/dashboard/perfil');
  }

}
