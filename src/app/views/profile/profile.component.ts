import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  historia: any = {
    id:'2334543ffsdf78sdf',
    titulo:'My amazing story',
    autor:{
      username:'@garavirod',
      uid: '234dhfsdf8764h',
    },
    genero:'Terror',
    narrativa:'Cuento',
    published:'03-23-23',
    valoracion:3,
    sinopsis:'El cuneto es de terror.'
  }
  historias: Array<any> = [];
  public getHistorias(): Array<any>{
    for(let i=0; i<8; i++){
      this.historias.push(this.historia)
    }
    return this.historias;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
