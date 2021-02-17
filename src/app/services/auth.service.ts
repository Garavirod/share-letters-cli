import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { UserCredentials } from '../models/UserCredentials';
import { isLoggedIn } from '../helpers/jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {  }

  public register( credentials:UserCredentials ){
    const endpoint:string = `${environment.spenBaseURL}/credentials/register`;
    return this.http.post(endpoint,credentials);  
  }

  public login( credentials: UserCredentials){
    const endpoint:string = `${environment.spenBaseURL}/credentials/login`;
    return this.http.post(endpoint,credentials); 
  }

  public isUserLoggedIn():boolean{
    return isLoggedIn();
  }
}
