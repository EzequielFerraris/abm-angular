import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VeterinariosServiceService {

  constructor(private firestore: Firestore) 
  {

  }

  agregar_veterinario(actor: object){
    let col = collection(this.firestore, 'veterinarios');
    addDoc(col, actor);
  }

  get_collection()
  {
    let col = collection(this.firestore, 'veterinarios');
    return col;
  }
}
