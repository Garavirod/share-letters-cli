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

  sendValoracion(valoracion:any){
    const endpoint = `${environment.spenBaseURL}/valoracion/value-story`;
    return this.http.post(endpoint,valoracion);
  }

  statusValoracion(idEscritor:string, idHistoria:string){
    const endpoint = `${environment.spenBaseURL}/valoracion/valued?idEscritor=${idEscritor}&idHistoria=${idHistoria}`;
    return this.http.get(endpoint);
  }

  getStoryComments(idHistoria:string){
    const endpoint = `${environment.spenBaseURL}/comentarios/comments/${idHistoria}`;
    return this.http.get(endpoint);
  }
}
