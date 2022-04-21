import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { ResetPasswordService } from '../../../../services/auth/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;
  alertSuccess = false;
  loadingShow = false
  errors = [];
  statusInputPassword = 'regular'
  statusInputConfirmedPassword = 'regular'
  statusInputMessagePassword = ''
  statusInputMessageConfirmedPassword = ''
  
  constructor(
     private formBuilder: FormBuilder,
     private route: ActivatedRoute,
     private resetPasswordService: ResetPasswordService
  ) {
    this.formBuilderInput()
   }

  ngOnInit(): void {

     this.form.get("token").setValue(this.route.snapshot.queryParams["token"]) /*Obetenemos el token de la url*/
     this.form.get("email").setValue(this.route.snapshot.queryParams["email"]) /*Obetenemos el correo electrónico de la url*/
  }

    /*=============================================
    FUNCIÓN PARA CAMBIAR LA CONTRASEÑA DEL LADO SERVIDOR
   =============================================*/
  async resetPassword(){
    if(this.form.invalid) return
    this.loadingShow = true;

    const response = await this.resetPasswordService.resetPassword(this.form.value)

   /*Validamos si la respuesta tiene errores*/
    if(response.length === 0){
      this.loadingShow = false;
      this.alertSuccess = true
      this.clearForm()  
    }else{
      
      this.statusInputPassword = 'error'
      this.statusInputConfirmedPassword = 'error'
      this.errors = response
      this.loadingShow = false;
    }
  }

  /*=============================================
   FUNCIÓN PARA LIMPIAR LOS CAMPOS LUEGO DE CAMBIAR LA CONTRASEÑA
  =============================================*/
  clearForm(){
    this.form.reset()
  }

  /*=============================================
   FORMULARIOS REACTIVOS
  =============================================*/
  formBuilderInput(){
    this.form = this.formBuilder.group({
      password: ['', [
        Validators.required,
      ]],
      confirmPassword: ['', [
        Validators.required
      ]],
      email: '',
      token: '',
    })
    
    this.form.valueChanges
    .pipe(
      debounceTime(350),
    )
    .subscribe(data => {
       this.validateInput()
    });
  }
  /*=============================================
   FUNCIÓN PARA VALIDAR LOS CAMPOS
  =============================================*/
  validateInput(){
    if(this.form.get("password").errors && this.form.get("password").dirty){
      this.statusInputPassword = 'error'
      this.statusInputMessagePassword = 'Este campo es requerido'
     }else{
      this.statusInputPassword = 'regular'
      this.statusInputMessagePassword = ''
     }

     if(this.form.get("confirmPassword").errors && this.form.get("confirmPassword").dirty){
      this.statusInputConfirmedPassword = 'error'
      this.statusInputMessageConfirmedPassword = 'Este campo es requerido'
     }else{
      this.statusInputConfirmedPassword = 'regular'
      this.statusInputMessageConfirmedPassword = ''
     }
  }
}
