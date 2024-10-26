import { Component } from '@angular/core';
import { ListaAnimalesComponent } from "../lista-animales/lista-animales.component";
import { AltaAnimalComponent } from "../alta-animal/alta-animal.component";
import { ModificarAnimalComponent } from "../modificar-animal/modificar-animal.component";
import { EliminarAnimalComponent } from "../eliminar-animal/eliminar-animal.component";

@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [ListaAnimalesComponent, AltaAnimalComponent, ModificarAnimalComponent, EliminarAnimalComponent],
  templateUrl: './animales.component.html',
  styleUrl: './animales.component.css'
})
export class AnimalesComponent {

  public animal_seleccionado : object = {};

  seleccion_animales( $event: object ) {
    this.animal_seleccionado = $event;
  }

}
