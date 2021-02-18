import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() idHistoria:string = "";
  @Input() idReader:string = "";
  comentarios:any; //all stroy comments
  loading:boolean = false;
   //comentary form
   comentario:string = "";

  constructor(private historiaService:HistoriasService) { }

  ngOnInit(): void {
    this.getComments();
  }

  public sendComent(f: NgForm):void{
    const comment = {
      "idEscritor":this.idReader,
      "idHistoria":this.idHistoria,
      "comentario":this.comentario
    }
    this.historiaService.addStoryComments(comment).subscribe(
      (res:any)=>{
        this.comentario = "";
        this.getComments();
        console.log(res);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        
      }
    )
    
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
