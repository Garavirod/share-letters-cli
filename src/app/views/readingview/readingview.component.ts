import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-readingview',
  templateUrl: './readingview.component.html',
  styleUrls: ['./readingview.component.css']
})
export class ReadingviewComponent implements OnInit {
  public comentario:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public sendComent(f: NgForm):void{
    console.log(f.value);
    
  }

}
