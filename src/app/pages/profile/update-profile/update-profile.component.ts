import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { UserService } from '../../../services/user.service';
import { ProfileService } from '../services/profile.service';

// Models
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  currentUser: User;
  loading: boolean = false;

  formUserUpdate: FormGroup = this.formBuilder.group({
    firstName: ['', [ Validators.required ]],
    lastName: ['', [ Validators.required ]],
    phoneNumber: ['', [ Validators.required ]],
    email: [ { value: '', disabled: true }, [ Validators.required ]],
    document: ['', [ Validators.required ]],
    term: [false, [ Validators.requiredTrue ]]
  });

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private profileService: ProfileService ) { }

  ngOnInit(): void {
    this.currentUser = this.userService.user;

    this.formUserUpdate.reset({
      firstName: this.currentUser.firstName,
      lastName: this.currentUser.lastName,
      phoneNumber: this.currentUser.phoneNumber,
      email: this.currentUser.email,
      document: this.currentUser.document,
      term: true
    });
  }

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
    
    this.profileService.updateCurrentUser(this.formUserUpdate.value)
      .subscribe( () => {
        this.loading = false;
        document.getElementById('modal-confirm-update').setAttribute('open', 'true');
      }, error => {
        this.loading = false;
        console.log('error: ', error)
      });
  }

  closeModal( event ) {
    this.router.navigateByUrl('/dashboard/perfil');
  }

}
