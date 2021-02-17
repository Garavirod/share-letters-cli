import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoriasService {
  
  
  constructor(private http:HttpClient) {    
  }

  getValoracionAVG(idHistoria:string){
    const endpoint = `${environment.spenBaseURL}/valoracion/value-avg/${idHistoria}`;
    return this.http.get(endpoint);
  }

  getHistoriaLectura(idHistoria:string){
    const endpoint = `${environment.spenBaseURL}/historias/story-reading/${idHistoria}`;
    return this.http.get(endpoint);
  }
}
