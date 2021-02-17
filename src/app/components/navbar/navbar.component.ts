import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged:boolean=false;
  constructor(private authService:AuthService) { }
  //Logout
  logout():void{
    this.authService.logOut();
  }

  ngOnInit(): void {
    this.authService.userLogged$.subscribe(res=>this.userLogged);
  }

}
