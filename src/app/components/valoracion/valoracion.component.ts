import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  public isLoadedValoracion:boolean = true;
  public valoracion:number = 3;
  @Input() idHistoria:string = "";
  valoraciones: Array<number> = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
