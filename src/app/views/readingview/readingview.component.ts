import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from 'src/app/models/escritor-model';
import { Historia } from 'src/app/models/historia-model';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriasService } from 'src/app/services/historias.service';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-readingview',
  templateUrl: './readingview.component.html',
  styleUrls: ['./readingview.component.css']
})
export class ReadingviewComponent implements OnInit {
  results:boolean = true;
  searched:boolean = false;
  //models
  escritor:Escritor = new Escritor();
  historia:Historia = new Historia();
  readerID:string = "";
  // Story id
  idHistoria:string = "";

 

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
    this.historiaService.getHistoriaLectura(this.idHistoria)
    .pipe(      
      catchError(err => {
          console.log('Error ocurrió');          
          return throwError('Error personalizado');
      })
    )
    .subscribe(
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
      },
      (error)=>{
        this.results = false;
        this.searched = true;             
      }
    )
  }

}
