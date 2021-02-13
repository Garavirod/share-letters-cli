import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) {
    
  }

  saveImage(image: File){    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dlapenluj/upload';
    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file',image);
    return this.http.post(cloudUrl,formData);
  };
}
