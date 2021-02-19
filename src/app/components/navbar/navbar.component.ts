import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged:boolean=false;
  constructor(private authService:AuthService) {
    this.userLogged=authService.isUserLoggedIn();
   }
  ngOnInit(): void {
    this.authService.userLogged$.subscribe(res=>{
      this.userLogged = res;
    });
  }
  //Logout
  logout():void{
    this.authService.logOut();
  }


}
