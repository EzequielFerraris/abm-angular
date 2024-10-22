import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-detalle-veterinario',
  standalone: true,
  imports: [],
  templateUrl: './detalle-veterinario.component.html',
  styleUrl: './detalle-veterinario.component.css'
})
export class DetalleVeterinarioComponent {

  @Input() veterinario_seleccionado: any;
}
