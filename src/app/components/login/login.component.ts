import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/UserCredentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials:UserCredentials = new UserCredentials();
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  sendCredentials(formRef: NgForm){
    this.authService.login(this.credentials).subscribe(
      (res:any)=>{
        localStorage.setItem('spen-tkn',res.token);
        this.router.navigateByUrl('profile');
      },
      (error)=>{
        console.log(error);        
      }  
    );
  }

}
