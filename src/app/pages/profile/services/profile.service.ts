import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { tap } from 'rxjs';

const BASE_URL_API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService) { }

  updateCurrentUser( formData ) {
    const {firstName, lastName, phoneNumber, document} = formData;
    const data = {
      firstName,
      lastName,
      phoneNumber,
      email: this.userService.user.email,
      document,
      role: this.userService.user.roles[0]
    };
    
    return this.httpClient.put(`${BASE_URL_API}/power-user/${this.userService.user.idCurrentRol}`, data)
      .pipe(
        tap( () => {
          this.userService.user.firstName = firstName;
          this.userService.user.lastName = lastName;
          this.userService.user.phoneNumber = phoneNumber;
          this.userService.user.document = document;
        }) 
      );    
  }
}
