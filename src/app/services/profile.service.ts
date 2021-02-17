import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) {
    
  }

  saveImage(image: File){        
    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file',image);
    return this.http.post(environment.cloudinaryURL,formData);
  };
}
