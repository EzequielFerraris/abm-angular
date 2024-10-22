import { Injectable } from '@angular/core';
import { setDoc, collection, collectionData, Firestore, query, where, doc, getDoc, increment, addDoc, limit, orderBy } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalesABMService {

  constructor(private firestore: Firestore) 
  {

  }

  agregar_animal(animal: object){
    let col = collection(this.firestore, 'animales');
    addDoc(col, animal);
  }

  get_collection()
  {
    let col = collection(this.firestore, 'animales');
    return col;
  }
  

  getCollectionWithId(): Observable<any[]> {
    const collectionRef = collection(this.firestore, 'animales');

    return collectionData(collectionRef, { idField: 'id' }).pipe(
      map((docs: any) => {
        docs.map((doc:any) => ({
          ...doc,
          id: doc.id,
        }))}
      )
    );
  }
}
