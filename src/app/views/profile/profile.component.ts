import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getUserInfo } from 'src/app/helpers/jwt';
import { Escritor } from 'src/app/models/escritor-model';
import { Historia } from 'src/app/models/historia-model';
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
  private tokenInfo:any = null;
  escritor:Escritor;
  historia:Historia;
  selectedFile: ImageSnippet | null = null;

  //Model story

  constructor(
      private historiasService: HistoriasService, 
      private profileService: ProfileService,
  ) { 
    this.escritor = new Escritor();
    this.historia = new Historia();
    this.tokenInfo = getUserInfo();
   };

  ngOnInit(): void {
    this.getProfileInformation();
    console.log("Token Info >: ",this.tokenInfo);    
  }

  getProfileInformation(){
    
    if(this.tokenInfo){
      // rest petition based on user's uid
      this.profileService.getProfile(this.tokenInfo.uid).subscribe(
        (res:any)=>{
          //Asignación de datos del escritor
          this.escritor.setAbout(res.escritor.about);
          this.escritor.setUsername(res.escritor.username);
          this.escritor.setId(res.escritor.about);
          this.escritor.setEmail(res.escritor.email);
          this.escritor.setImageURL(res.escritor.imageURL);
          this.escritor.setNumHist(res.numHist);
          //Asignación de historias
          this.escritor.setHistorias(res.historias);
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
            this.escritor.setImageURL(res.secure_url);              
          }
        )
      });   
      reader.readAsDataURL(file); 
    }else{
      console.log("ningun arivho seleccionado");
      
    }
  }
}
