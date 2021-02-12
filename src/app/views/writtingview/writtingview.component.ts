import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-writtingview',
  templateUrl: './writtingview.component.html',
  styleUrls: ['./writtingview.component.css']
})
export class WrittingviewComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  recoverContent(content:string){
    console.log("Story content >", content);
    
  }
}
