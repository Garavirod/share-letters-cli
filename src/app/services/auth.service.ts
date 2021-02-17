import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { UserCredentials } from '../models/UserCredentials';
import { isLoggedIn } from '../helpers/jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged$ = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router:Router) {  }

  //Register a new user
  public register( credentials:UserCredentials ){
    const endpoint:string = `${environment.spenBaseURL}/credentials/register`;
    return this.http.post(endpoint,credentials);  
  }

  //logs in a user
  public login( credentials: UserCredentials){
    const endpoint:string = `${environment.spenBaseURL}/credentials/login`;
    return this.http.post(endpoint,credentials); 
  }

  //user logout

  public logOut():void{
    localStorage.removeItem('spen-tkn');
    this.userLogged$.emit(false);
    this.router.navigateByUrl('');
  }

  public isUserLoggedIn():boolean{
    return isLoggedIn();
  }
}
