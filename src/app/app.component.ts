import { Component, OnInit } from '@angular/core';
import { isLoggedIn } from './helpers/jwt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Spen';
  constructor(){
    
  }
  
  ngOnInit(){       
  }
}

