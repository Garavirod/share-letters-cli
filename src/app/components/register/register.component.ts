import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/UserCredentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials:UserCredentials = new UserCredentials();

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(formRef: NgForm):void{
    this.authService.register(this.credentials).subscribe(
      (res:any)=>{
        localStorage.setItem('spen-tkn',res.token);
        this.authService.userLogged$.emit(true);
        this.router.navigateByUrl('profile');
      },
      (error)=>{
        console.log(error);        
      }
    )      
  }
}
