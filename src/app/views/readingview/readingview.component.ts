import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from 'src/app/models/escritor-model';
import { Historia } from 'src/app/models/historia-model';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-readingview',
  templateUrl: './readingview.component.html',
  styleUrls: ['./readingview.component.css']
})
export class ReadingviewComponent implements OnInit {
  results:boolean = true;
  searched:boolean = false;
  mensaje:string = ""; // message if any error comes up

  //models
  escritor:Escritor = new Escritor();
  historia:Historia = new Historia();
  readerID:string = "";
  // Story id
  idHistoria:string = "";

  //comentary form
  comentario:string = "";

  constructor(
    private activeRoute:ActivatedRoute,
    private historiaService:HistoriasService,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.idHistoria =  this.activeRoute.snapshot.params.id;
    this.readerID = this.auth.getUserID();
    this.getHistoriaReadingMode();
  }

  private getHistoriaReadingMode(){
    this.historiaService.getHistoriaLectura(this.idHistoria).subscribe(
      (res:any)=>{
        //Writter data asignment
        this.escritor.setUsername(res.historia.Escritor.username);
        this.escritor.setId(res.historia.Escritor.id);
        //Story data asigment
        this.historia.setTitulo(res.historia.titulo);
        this.historia.setNarrativa(res.historia.narrativa);
        this.historia.setTitulo(res.historia.titulo);
        this.historia.setGenero(res.historia.genero);
        this.historia.setFk_escritor(this.escritor.getId());
        this.historia.setContenido(res.historia.contenido);
        this.historia.setCreatedAt(res.historia.createdAt);
        this.historia.setUpdatedAt(res.historia.updatedAt);
        console.log("La historia es >: ",this.historia);  
           
      },
      (error)=>{
        this.results = false;
        this.searched = true;
        this.mensaje = error.error.msg;
        console.log(error.error);
        
      }
    )
  }

  public sendComent(f: NgForm):void{
    console.log(f.value);
    
  }

}
