import { Component, Input } from '@angular/core';
import { AnimalesABMService } from '../../services/animales-abm.service';
import { deleteDoc, collection, collectionData, Firestore, query, where, doc, getDoc, increment, addDoc, limit, orderBy, getDocs } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-animal',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-animal.component.html',
  styleUrl: './eliminar-animal.component.css'
})
export class EliminarAnimalComponent {

  @Input() animal_seleccionado: any;

  constructor(private animales : AnimalesABMService)
  {}

  eliminar(id : any){
    
    this.animales.EliminarAnimal(id)

  }
}
