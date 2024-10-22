import { Component } from '@angular/core';
import { ListaVeterinariosComponent } from "../lista-veterinarios/lista-veterinarios.component";
import { DetalleVeterinarioComponent } from "../detalle-veterinario/detalle-veterinario.component";
import { DetallePaisComponent } from "../detalle-pais/detalle-pais.component";

@Component({
  selector: 'app-veterinarios',
  standalone: true,
  imports: [ListaVeterinariosComponent, DetalleVeterinarioComponent, DetallePaisComponent],
  templateUrl: './veterinarios.component.html',
  styleUrl: './veterinarios.component.css'
})
export class VeterinariosComponent {

  public veterinario_seleccionado : object = {};

  seleccion_veterinario( $event: object ) {
    this.veterinario_seleccionado = $event;
    console.log($event);
  }
}
