import { Component, OnInit } from '@angular/core';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  historias: Array<any> = [];
  constructor(private historiasService: HistoriasService) { };

  ngOnInit(): void {
    this.historias =  this.historiasService.getHistorias();
  }

}
