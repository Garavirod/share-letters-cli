import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escritor } from 'src/app/models/escritor-model';
import { HistoriasService } from 'src/app/services/historias.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-escritorview',
  templateUrl: './escritorview.component.html',
  styleUrls: ['./escritorview.component.css']
})
export class EscritorviewComponent implements OnInit {
  escritor:Escritor;
  //loading
  loadingStories:boolean = false;
  messageLoadingStories:string = "Cargando historias...";

  //uidProfile
  uid:string;

  //was
  wasSearched = false;

  constructor(
    private profile:ProfileService,
    private activeRoute:ActivatedRoute,
    private route:Router,
    private historiasService:HistoriasService
    ) { 
      this.escritor = new Escritor();
      this.uid = this.activeRoute.snapshot.params.id;
     }

  ngOnInit(): void {
    this.getWritterInformation();
  }

  getWritterInformation(){
    this.loadingStories=true;
    this.profile.getProfile(this.uid).subscribe(
      (res:any)=>{
        //Asign Escritor data to object Escritor
        this.escritor.setAbout(res.escritor.about);
        this.escritor.setEmail(res.escritor.email);
        this.escritor.setImageURL(res.escritor.imageURL);
        this.escritor.setUsername(res.escritor.username);
        this.escritor.setNumHist(res.numHist);
        this.escritor.setHistorias(res.historias);
        console.log(res);        
      },
      (error)=>{        
        console.log(error);
        //if author with uid has not been found it, redirect to busqueda.        
        this.route.navigateByUrl('/busqueda')
      },
      ()=>{
        this.loadingStories=false;
      }
    )
  }

  getFilters(filters:any){
    this.loadingStories = true;          
      //search by autor
      this.historiasService.filterInAuthor(filters.narrativa,filters.titulo,this.uid)
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
