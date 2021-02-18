import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() passFilters:EventEmitter<any>;

  //filtros
  public filtros = {
    titulo:'',
    narrativa:''
  }

  constructor() { 
    this.passFilters = new EventEmitter();
   }

  ngOnInit(): void {
  }

  emitFilter():void{
    this.passFilters.emit(this.filtros);
    this.filtros =  {
      titulo:'',
      narrativa:''
    }
  }

}
