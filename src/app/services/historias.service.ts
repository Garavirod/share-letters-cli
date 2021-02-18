import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriasService {
  
  
  constructor(private http:HttpClient, private auth:AuthService) {    
  }

  getValoracionAVG(idHistoria:string){
    const endpoint = `${environment.spenBaseURL}/valoracion/value-avg/${idHistoria}`;
    return this.http.get(endpoint);
  }

  //READING
  getHistoriaLectura(idHistoria:string){
    const endpoint = `${environment.spenBaseURL}/historias/story-reading/${idHistoria}`;
    return this.http.get(endpoint).pipe(
      catchError(this.ErrorCusomtMannage)
    );
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

  createNewStory(historia:any){
    const endpoint = `${environment.spenBaseURL}/historias/new-story`;
    return this.http.post(endpoint,historia);
  }

  //FILTTERS
  filterInAuthor(narrativa:string, title:string, idEscritor:string){
    const endpoint = `${environment.spenBaseURL}/historias/filters-by-auth?narrativa=${narrativa}&title=${title}&idEscritor=${idEscritor}`;
    return this.http.get(endpoint);
  }
  filterInAll(narrativa:string, title:string){
    const endpoint = `${environment.spenBaseURL}/historias/filters-all?narrativa=${narrativa}&title=${title}`;
    return this.http.get(endpoint);
  }

  //ALL STORIES
  getAllStories(){
    const endpoint = `${environment.spenBaseURL}/historias/all-stories`;
    return this.http.get(endpoint);
  }
  //ALL STORIES BY AUTHOR


  //VERIFY IF USR IS THE AUTHOR
  isAuthorOf(idHistoria:string){
    const headers = new HttpHeaders({
      'spen-tkn': this.auth.getTokenUser(),
    });

    const endpoint = `${environment.spenBaseURL}/historias/is-author?idHistoria=${idHistoria}`;
    return this.http.get(endpoint,{headers});
  }

  //ErrorManagement
  ErrorCusomtMannage(error:HttpErrorResponse){
    console.warn(error);    
    return throwError('Error en Historia servico');
  }
}
