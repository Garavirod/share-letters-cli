import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignvalue',
  templateUrl: './asignvalue.component.html',
  styleUrls: ['./asignvalue.component.css']
})
export class AsignvalueComponent implements OnInit {
  public starValue:number = 0;
  public existValue:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  asignValue(r:any){
    this.starValue = parseInt(r);
    
  }

  sendValue(){
    console.log("Value was sent");
    
  }

}
