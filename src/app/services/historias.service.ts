import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriasService {
  private historia: any = {
    id: '2334543ffsdf78sdf',
    titulo: 'My amazing story',
    autor: {
      username: '@garavirod',
      uid: '234dhfsdf8764h',
    },
    genero: 'Terror',
    narrativa: 'Cuento',
    published: '03-23-23',
    valoracion: 3,
    sinopsis: 'El cuneto es de terror.'
  }
  
  constructor() {
    console.log("Servico listo");

  }

  getHistorias(): Array<any> {
    let historias: Array<any> = [];
    for (let i = 0; i < 8; i++) {
      historias.push(this.historia)
    }
    return historias;
  }
}
