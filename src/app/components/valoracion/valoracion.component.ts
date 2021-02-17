import { Component, OnInit, Input } from '@angular/core';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  public isLoadedValoracion:boolean = false;
  public valoracion:number = 0;
  @Input() idHistoria:string = "";
  valoraciones: Array<number> = [1,2,3,4,5];
  constructor(private historiaService:HistoriasService) { }

  ngOnInit(): void {
    this.getValoracion();
  }
  
  getValoracion(){
    this.isLoadedValoracion = true;
    this.historiaService.getValoracionAVG(this.idHistoria).subscribe(
      (res:any)=>{
        this.valoracion = (res.valoracion[0].puntaje_avg) ? parseInt((res.valoracion[0].puntaje_avg)): 0;        
        console.log(res);
      },
      (error)=>{
        console.log(error.error);
      },()=>{
        this.isLoadedValoracion = false;
      }
    );
  }
}
