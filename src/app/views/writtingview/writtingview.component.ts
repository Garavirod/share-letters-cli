import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Historia } from 'src/app/models/historia-model';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriasService } from 'src/app/services/historias.service';
@Component({
  selector: 'app-writtingview',
  templateUrl: './writtingview.component.html',
  styleUrls: ['./writtingview.component.css']
})
export class WrittingviewComponent implements OnInit {
  idHistoriaURL:string;  
  historia:Historia;

  //loadings
  savingStroy:boolean = false;
  deletingStory:boolean = false;

  //Status actions
  wasSavedStory:boolean = false;
  errorOnSaved:boolean = false;  
  errorOnDelete:boolean = false;

  constructor(
      private historiaService:HistoriasService, 
      private router:Router,
      private activeRoute:ActivatedRoute
    ) {
    this.idHistoriaURL = this.activeRoute.snapshot.params.id;
    this.historia =  new Historia();
   }

  ngOnInit(): void {
    this.verifyAuthor();
  }


  verifyAuthor(){
    this.historiaService.isAuthorOf(this.idHistoriaURL).subscribe(
     (res:any)=>{
       this.historia.setTitulo(res.historia.titulo);
       this.historia.setContenido(res.historia.contenido);
       this.historia.setNarrativa(res.historia.narrativa);
       this.historia.setGenero(res.historia.genero);
       this.historia.setSinopsis(res.historia.sinopsis);
       this.historia.setStatus(res.historia.status);   
       this.historia.setCreatedAt(res.historia.createdAt);
       this.historia.setId(res.historia.id);    
      console.log(this.historia);      
     },
     (error)=>{
      this.router.navigateByUrl('/profile');           
     },
     ()=>{

     } 
    )
  }

  recoverContent(content:string){
    this.historia.setContenido(content);
  }

  deleteStory(f:any){
    f.click();
    this.deletingStory=true;
    this.historiaService.delteStoryFromBDD(this.historia.getId())
    .subscribe(
      (res:any)=>{   
        this.router.navigateByUrl('/profile');                          
      },
      (error)=>{
        this.deletingStory=false;
        this.errorOnDelete = true;
        console.log(error);                 
      },
      ()=>{
        this.deletingStory=false;
      } 
    )
  }

  public saveStory(){
    this.savingStroy = true;    
    this.historiaService.saveStoryChanges(this.historia).subscribe(
      (res:any)=>{  
         
       this.wasSavedStory = true;
       setTimeout(()=>{
        this.wasSavedStory = false;
       },3000);    
       console.log(res);      
      },
      (error)=>{
       console.log(error);   
       this.errorOnSaved = true;
       setTimeout(()=>{
        this.errorOnSaved = false;
       },3000);                       
      },
      ()=>{
        this.savingStroy = false;
      } 
     )    
  }
}
