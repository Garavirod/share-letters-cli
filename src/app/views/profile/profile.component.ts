import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getUserInfo } from 'src/app/helpers/jwt';
import { Escritor } from 'src/app/models/escritor-model';
import { Historia } from 'src/app/models/historia-model';
import { AuthService } from 'src/app/services/auth.service';
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
  private uid:string;
  escritor:Escritor;
  historia:Historia;
  selectedFile: ImageSnippet | null = null;
  
  //loading
  loadingStories:boolean = false;
  messageLoadingStories:string = "Cargando historias...";
  updatingPhoto:boolean = false;
  creatingStory:boolean = false;


  //was
  wasSearched:boolean = false;
  triedCreate:boolean = false;

  //errors
  errorOnCreate:boolean = false;

  //Photo was selected
  photoSelected:boolean = true;


  constructor(
      private historiasService: HistoriasService, 
      private profileService: ProfileService,
      private auth: AuthService
  ) { 
    this.escritor = new Escritor();
    this.historia = new Historia();
    this.uid = this.auth.getUserID();
    
   };

  ngOnInit(): void {
    this.getProfileInformation();   
  }

  getProfileInformation(){    
    this.loadingStories = true;
    // rest petition based on user's uid
    this.profileService.getProfile(this.uid,"autor").subscribe(
      (res:any)=>{
        //Asignación de datos del escritor
        this.escritor.setAbout(res.escritor.about);
        this.escritor.setUsername(res.escritor.username);
        this.escritor.setId(res.escritor.id);
        this.escritor.setEmail(res.escritor.email);
        this.escritor.setImageURL(res.escritor.imageURL);
        this.escritor.setNumHist(res.numHist);
        //Asignación de historias
        this.escritor.setHistorias(res.historias);
        console.log(res);          
      },
      (error)=>{
        console.log(error);          
      },
      ()=>{
        this.loadingStories = false;
      }
    )
  }

  createStory(formRef: NgForm):void{   
    
    const story = {
      "titulo": this.historia.getTitulo(),
      "narrativa":this.historia.getNarrativa(),
      "genero":this.historia.getGenero(),
      "id":this.uid
    }
    this,this.creatingStory = true;    
    this.historiasService.createNewStory(story).subscribe(
      (res:any)=>{
        this,this.creatingStory = false; 
        this.triedCreate = true;   
        this.errorOnCreate = false;
        this.escritor.addNewStory(res.historia);        
        console.log(res);           
      },
      (error)=>{
        this,this.creatingStory = false; 
        this.triedCreate = true;   
        this.errorOnCreate = true;
        console.log(error);
      }
    )

    console.log(story);    
  }

  changePhoto(imageInput: any):void{
    const file: File = imageInput.files[0];
    if(file){
      this.updatingPhoto = true;
      const reader = new FileReader();
      reader.addEventListener('load',(event:any) => {
        this.selectedFile = new ImageSnippet(event.target.result, file);
        this.profileService.saveImage(this.selectedFile.file).subscribe(
          (res:any)=>{            
            this.escritor.setImageURL(res.secure_url); // //Asign new url profile image         
            this.updatePhotoOnBdd(); // update new image url on BDD            
          },
          (error)=>{
            console.log(error);
          },
          ()=>{
            this.photoSelected = true;
            this.updatingPhoto = false;
            this.selectedFile = null;
          }
        )
      });   
      reader.readAsDataURL(file); 
    }else{
      this.photoSelected=false;     
    }
  }

  private updatePhotoOnBdd(){
    const urlObj = {"imageURL":this.escritor.imageURL};
    this.profileService.updateImageOnBDD(urlObj, this.uid).subscribe(
      (res:any)=>{            
        console.log(res);           
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        
      }
    )
  }

  getFilters(filters:any){
    this.loadingStories = true;          
      //search by autor
      this.historiasService.filterInProfile(filters.narrativa,filters.titulo,this.uid,filters.todas)
      .subscribe(
        (res:any)=>{
          this.escritor.setHistorias(res.historias);
          console.log(res);          
        },
        (error)=>{
          console.log(error);          
        },
        ()=>{
          this.loadingStories = false;
          this.wasSearched = true;         
        }
      )

  }
}
