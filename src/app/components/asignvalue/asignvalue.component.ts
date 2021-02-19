import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-asignvalue',
  templateUrl: './asignvalue.component.html',
  styleUrls: ['./asignvalue.component.css']
})
export class AsignvalueComponent implements OnInit {
  @Input() idHistoria: string = ""; //historia
  @Input() idEscritor: string = ""; //lector
  @Input() idAutor: string = "";
  public starValue: number = 0;
  public valoracion: any;
  public existValue: boolean = false; //histria ya valorada por el lector?
  constructor(private historiaService: HistoriasService) {     
  }

  ngOnInit(): void {
    this.existValoracion();                    
  }

  asignValue(r: any) {
    this.starValue = parseInt(r);
  }

  sendValue() {
    this.valoracion = {
      "idEscritor": this.idEscritor,
      "idHistoria": this.idHistoria,
      "puntaje": this.starValue
    }
    this.historiaService.sendValoracion(this.valoracion).subscribe(
      (res: any) => {
        this.existValoracion();
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
      () => {

      }
    )
    console.log(this.valoracion);
  }

  existValoracion(){
    this.historiaService.statusValoracion(this.idEscritor, this.idHistoria).subscribe(
      (res: any) => {
        if(res.wasValued){
          this.existValue = res.wasValued;
          this.starValue = res.puntaje.puntaje;
        }
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
      () => {

      }
    )
  }
    /* if (this.idEscritor !== this.idAutor) {
  } */

}
