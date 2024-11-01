import { Component, EventEmitter, Output } from '@angular/core';
import { AnimalesABMService } from '../../services/animales-abm.service';
import { Subscription } from 'rxjs';
import { collectionData, orderBy, query} from '@angular/fire/firestore';

@Component({
  selector: 'app-lista-animales',
  standalone: true,
  imports: [],
  templateUrl: './lista-animales.component.html',
  styleUrl: './lista-animales.component.css'
})
export class ListaAnimalesComponent {

  private sub!:Subscription;
  public lista_animales: any = [];
  @Output() seleccion = new EventEmitter<object>();

  constructor(private animales : AnimalesABMService)
  {}

  ngOnInit()
  {
    this.get_animales();
  }
  
  elegir_animal(animal : object)
  {
    this.seleccion.emit(animal);
  }
  
  get_animales()
  {
    const observable = this.animales.get_collection();
  
    this.sub = observable.subscribe((respuesta: any) => {

    this.lista_animales = respuesta;
    console.log(respuesta);
      });
  } 
}

 

