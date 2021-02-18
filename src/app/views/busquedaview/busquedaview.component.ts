import { Component, OnInit } from '@angular/core';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-busquedaview',
  templateUrl: './busquedaview.component.html',
  styleUrls: ['./busquedaview.component.css']
})
export class BusquedaviewComponent implements OnInit {
  //historias
  historias:Array<any> = [];

  //loading
  loadingStories:boolean = false;
  messageLoadingStories:string = "Cargando historias...";

  //was
  wasSearchd:boolean = false;

  constructor(private historiasService:HistoriasService) { }

  ngOnInit(): void {
    this.getAllStories();
  }

  getAllStories(){
    this.loadingStories = true;
    this.historiasService.getAllStories().subscribe(
      (res:any)=>{
        this.historias = res.historias;
        console.log(res);        
      },
      (error)=>{
        console.log(error);        
      },
      ()=>{
        this.wasSearchd = true;
        this.loadingStories = false;
      }
    );
  }

}
