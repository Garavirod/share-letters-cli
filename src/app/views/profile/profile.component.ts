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
  private tokenInfo = getUserInfo();
  selectedFile: ImageSnippet | null = null;
  //info escritor
  escritor = {
    about:"",
    email:"",
    imagenURL:"",
    username:"",
    numhist:""
  }
  //historias escritor
  historias: Array<any> = [];

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
      private profileService: ProfileService,
  ) { };

  ngOnInit(): void {
    this.getProfileInformation();
    this.historias =  this.historiasService.getHistorias();
    console.log("Token Info >: ",this.tokenInfo);
    
  }

  getProfileInformation(){
    if(this.tokenInfo){
      this.profileService.getProfile(this.tokenInfo.uid).subscribe(
        (res:any)=>{
          //Asignación de datos del escritor
          this.escritor.username = res.escritor.username;
          this.escritor.about = res.escritor.about;
          this.escritor.email = res.escritor.email;
          this.escritor.imagenURL = res.escritor.imageURL;
          this.escritor.numhist = res.numHist;
          //Asignación de historias
          this.historias = res.historias;
          console.log(res);          
        },
        (error)=>{
          console.log(error);          
        }
      )
    }

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
            this.escritor.imagenURL = res.secure_url;                     
          }
        )
      });   
      reader.readAsDataURL(file); 
    }else{
      console.log("ningun arivho seleccionado");
      
    }
  }
}
