import { Component, Input, OnInit } from '@angular/core';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() idHistoria:string = "";
  comentarios:any;
  loading:boolean = false;
  constructor(private historiaService:HistoriasService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(){
    this.loading = true;
    this.historiaService.getStoryComments(this.idHistoria).subscribe(
      (res:any)=>{
        this.comentarios = res.comments;
        console.log(res);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        this.loading = false;
      }
    )
  }

}
