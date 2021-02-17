import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noresults',
  templateUrl: './noresults.component.html',
  styleUrls: ['./noresults.component.css']
})
export class NoresultsComponent implements OnInit {
  @Input() message:string = "Sin resultados";
  constructor() { }

  ngOnInit(): void {
  }

}
