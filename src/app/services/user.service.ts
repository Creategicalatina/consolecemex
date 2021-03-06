import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

// Modelos
import { User } from '../models/user.model';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Rol } from '../pages/interfaces/rol';


const BASE_URL_API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  roles: Rol[] = [];
  private keyToken = 'token';
  private keyExpiration = 'expiracion';
  private keyRoles = 'roles';  

  constructor( private httpClient: HttpClient ) { }

  get token(): string {
    return localStorage.getItem(this.keyToken) || '';
  }

  get headers() {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
  }
  /* get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  } */

  saveLocalStorage( resp: any ) {
    localStorage.setItem(this.keyToken, resp.token);
  }

  login( formData ) {
    return this.httpClient.post( `${ BASE_URL_API }/auth/login-console`, formData )
      .pipe(
        tap( (resp: any) => {
          console.log('llega: ', resp)
          this.saveLocalStorage( resp );
        })  
      );
  }

  validateToken(): Observable<boolean> {
    //console.log('consulta...')
    return this.httpClient.get( `${ BASE_URL_API }/auth/refresh-token`) 
      .pipe(
        map( (resp: any) => {
          console.log('respuesta: ', resp)
          if ( resp.powerUser ) {
            const { document, email, firstName, id, lastName, phoneNumber, slug, userName } = resp.powerUser.user;
            this.user = new User(document, email, firstName, id, lastName, phoneNumber, slug, userName, '', resp.roles, resp.powerUser.idPowerUser );
          } else {
            const { document, email, firstName, id, lastName, phoneNumber, slug, userName } = resp.user;
            this.user = new User(document, email, firstName, id, lastName, phoneNumber, slug, userName);
          }
          
          console.log('user:  ', this.user);
          this.saveLocalStorage( resp );
          return true;
        }),
        catchError( err =>  of(false) )
      );
  } 

  obtenerRol(): string {
    //TODO: revisar cuando trae mas de un rol
    return this.obtenerCampoJWT(this.keyRoles);
  }

  obtenerCampoJWT(campo: string): string{
    const token = localStorage.getItem(this.keyToken);

    if ( !token ) { return ''; }

    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[campo];
  }


  logout(){
    localStorage.removeItem(this.keyToken);
    localStorage.removeItem(this.keyExpiration);
  }

  getRoles() {
    return this.httpClient.get( `${ BASE_URL_API }/roles/list` )
      .pipe(
        map( (resp: Rol[])  => {
          this.roles = resp;
          return resp;
        })
      );
  }

  isLogged(): boolean {
    const token = localStorage.getItem(this.keyToken);

    if ( !token ) {
      return false;
    }

    const expiration = this.obtenerCampoJWT(this.keyExpiration);
    console.log('expiration: ', expiration)
    const expirationDate = new Date(expiration);
    console.log('expiration: ', expirationDate)

    if ( expirationDate <= new Date() ) {
      this.logout();
      return false;
    }

    return true;
  }

}
