import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {
  @Input() historias: Array<any> = [];
  @Input() editable: boolean = false;
  constructor() { }

  public filtros = {
    titulo:'',
    narrativa:''
  }
  ngOnInit(): void {
  }

  filterStories(f: NgForm){
    console.log(f.value);
    
  }
}
