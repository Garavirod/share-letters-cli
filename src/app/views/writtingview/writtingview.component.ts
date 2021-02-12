import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-writtingview',
  templateUrl: './writtingview.component.html',
  styleUrls: ['./writtingview.component.css']
})
export class WrittingviewComponent implements OnInit {
  historiaModel = {
    titulo: '',
    narrativa: '',
    genero:'',
    sinopsis:'',
    status:false,
    contenido:'',
  }

  constructor() { }

  ngOnInit(): void {
  }

  recoverContent(content:string){
    this.historiaModel.contenido = content;
  }

  public sendStory(formRef: NgForm){
    this.historiaModel = {...this.historiaModel, ...formRef.value}
    console.log(this.historiaModel);
    
  }
}
