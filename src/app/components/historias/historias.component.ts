import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {
  @Input() historias: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
