import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getUserInfo } from 'src/app/helpers/jwt';
import { HistoriasService } from 'src/app/services/historias.service';
import { ProfileService } from 'src/app/services/profile.service';

class ImageSnippet {
  constructor(public src:string, public file: File) {}
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  private uid = getUserInfo();
  
  selectedFile: ImageSnippet | null = null;
  historias: Array<any> = [];
  imgProfile: string = "https://res.cloudinary.com/dlapenluj/image/upload/v1613168530/sample.jpg";
  //Model story
  story={
    titulo:"",
    narrativa:"",
    genero:"",
    autor:"",
    valoracion:0,
    sinopsis:"",
    contenido:"",
    status:false,    
  }
  constructor(
      private historiasService: HistoriasService, 
      private profileService: ProfileService
  ) { };

  ngOnInit(): void {
    this.historias =  this.historiasService.getHistorias();
    console.log("UID",this.uid);
    
  }

  createStory(formRef: NgForm):void{
    console.log(formRef.value);    
  }

  changePhoto(imageInput: any):void{
    const file: File = imageInput.files[0];
    if(file){
      const reader = new FileReader();
      reader.addEventListener('load',(event:any) => {
        this.selectedFile = new ImageSnippet(event.target.result, file);
        this.profileService.saveImage(this.selectedFile.file).subscribe(
          (res:any)=>{            
            //Asign new url profile image
            this.imgProfile = res.secure_url;                     
          }
        )
      });   
      reader.readAsDataURL(file); 
    }else{
      console.log("ningun arivho seleccionado");
      
    }
  }
}
