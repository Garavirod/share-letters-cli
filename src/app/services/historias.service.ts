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

  addStoryComments(comentario:any){
    const endpoint = `${environment.spenBaseURL}/comentarios/new-comentary`;
    return this.http.post(endpoint,comentario);
  }

  filterInAuthor(narrativa:string, title:string, idEscritor:string){
    const endpoint = `${environment.spenBaseURL}/historias/filters-by-auth?narrativa=${narrativa}&title=${title}&idEscritor=${idEscritor}`;
    return this.http.get(endpoint);
  }
  filterInAll(narrativa:string, title:string){
    const endpoint = `${environment.spenBaseURL}/historias/filters-all?narrativa=${narrativa}&title=${title}`;
    return this.http.get(endpoint);
  }
}
