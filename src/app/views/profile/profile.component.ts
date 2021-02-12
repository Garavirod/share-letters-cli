import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  historias: Array<any> = [];
  //Model story
  story={
    titulo:"",
    narrativa:"",
    genero:"",
    autor:"",
    valoracion:0,
    sinopsis:"",
    contenido:"",
    status:false,
    
  }
  constructor(private historiasService: HistoriasService) { };

  ngOnInit(): void {
    this.historias =  this.historiasService.getHistorias();
  }

  createStory(formRef: NgForm):void{
    console.log(formRef.value);    
  }
}
