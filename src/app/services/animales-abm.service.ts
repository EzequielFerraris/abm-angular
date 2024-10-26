import { Injectable } from '@angular/core';
import { deleteDoc, collection, collectionData, Firestore, updateDoc, doc, addDoc } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AnimalesABMService {

  public animales_con_id : any = [];

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
    return collectionData(col, {idField: 'id'}) ;
  }
  
  async EliminarAnimal(id:any){
    const docAnimal = doc(this.firestore, `animales/${id}`)
    deleteDoc(docAnimal).then( r => {
      Swal.fire(
        {
          title: 'Salir',
          iconColor: '#FF00C1',
          text: 'Ha salido correctamente.',
          icon: 'success',
          confirmButtonText: 'Ok'
        }
      ).then(()=> 
        {window.location.reload()});
    })
    .catch( e => {
      console.log(e)
    });
  }

  async UpdateAnimal(animalN: any, id:string){

    const docAnimal = doc(this.firestore, `animales/${id}`);

    return await updateDoc(docAnimal, animalN); 

  }
}
