import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Servicios
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  formLogin: FormGroup = this.formBuilder.group({
    user: ['', [ Validators.required ]],
    password: ['', [ Validators.required ]]
  });
  //TODO: falta validar que la contraseña  contengan como mínimo una mayúscula, una minúscula, un número y un carácter especial

  constructor( 
    private formBuilder: FormBuilder,
    private userService: UserService, 
    private router: Router ) { }

  ngOnInit(): void {  }

  getStatusField( field: string ) {
    if ( this.formLogin.controls[field].errors && this.formLogin.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formLogin.controls[field].errors && this.formLogin.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  onSubmit() {    
    if ( this.formLogin.invalid ) {
      this.formLogin.markAllAsTouched();
      return;
    }
    
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.formLogin.reset();
      this.router.navigateByUrl('/');
    }, 3000);
    console.log('click del login...', this.formLogin.value);    
  }
}
