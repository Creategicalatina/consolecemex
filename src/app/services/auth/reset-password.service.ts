import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

const URL = environment.urlapi

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /*=============================================
   PETICIÓN AL SERVIDOR
  =============================================*/
  resetPassword(data: Object){    
    return new Promise<string[]>(resolve =>{
      this.http.post(`${URL}/api/auth/reset-password`, data).subscribe(
      resp => {
        if(resp['ok']){
          resolve([])
        }else{
          resolve(['Error al actualizar contraseña'])
        }
      },
      (error) =>{
    
        let errors = this.handleError(error)
        resolve(errors)
      }
      )
    })
  }
  /*=============================================
   ERRORES DE VALIDACIÓN
  =============================================*/
  private handleError = (error: HttpErrorResponse) : string[] => {
   if(error.status === 400) {
      return this.handleBadRequest(error);
    }else{
     return this.errorServer()
    }
  }

  /*=============================================
   ERRORES DESDE EL SERVIDOR
  =============================================*/
  private handleBadRequest = (error: HttpErrorResponse): string[] => {
    const errors = []
    if(error.error.errors){
      const keys = Object.keys(error.error.errors)
      keys.forEach((key)=>{
        const errorData = error.error.errors[key]
        if(errorData.toLowerCase){
          errors.push(errorData)
        }else{
          errors.push(...errorData)
        }
      })
    }
    return errors;
  }

  /*=============================================
   ERROR AL REALIZAR LA PETICIÓN AL SERVIDOR
  =============================================*/
  private errorServer(){
    const errors = []
    const message = ['Error al procesar su solicitud en el servidor, por favor consulte al administrador']
    errors.push(message)
    return errors
  }

}