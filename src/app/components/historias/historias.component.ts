import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {
  @Input() historias: Array<any> = [];
  @Input() autor: string = "Sin asignar";
  @Input() editable: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
