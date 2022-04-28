import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

// Modelos
import { User } from '../models/user.model';
import { catchError, map, Observable, of, tap } from 'rxjs';

const BASE_URL_API = environment.urlapi;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor( private httpClient: HttpClient ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  saveLocalStorage( token: string ) {
    console.log('datos que llegan: ');
    //localStorage.setItem('token', token);
  }

  validateToken(): Observable<boolean> {
    console.log('consulta...')
    return this.httpClient.get( `${ BASE_URL_API }/login/refresh`, this.headers )
      .pipe(
        map( (resp: any) => {
          console.log('respuesta: ', resp)
          this.saveLocalStorage( resp );
          return true;
        }),
        catchError( err =>  of(false) )
      );
  } 

  login( formData ) {
    return this.httpClient.post( `${ BASE_URL_API }/login`, formData )
      .pipe(
        tap( (resp: any) => {
          this.saveLocalStorage( resp );
        })  
      );
  }

}
