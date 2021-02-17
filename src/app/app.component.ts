import { Component, OnInit } from '@angular/core';
import { isLoggedIn } from './helpers/jwt';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isuserLogged:boolean = false;
  title = 'Spen';
  constructor(private auth:AuthService){
    //Capture event boolean in order to show if navbar is visible
  }
  
  ngOnInit(){   
    this.isuserLogged = this.auth.isUserLoggedIn();
    this.auth.userLogged$.emit(this.isuserLogged);
  }
}

