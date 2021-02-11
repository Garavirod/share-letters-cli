import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  @Input() valoracion:number = 0;
  valoraciones: Array<number> = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
