import { Component, Input } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})
export class DetallePaisComponent {

  public lista_paises! : any[];
  @Input() veterinario_seleccionado: any = {}; 

  constructor(private paises : PaisesService)
  {}

  ngOnInit()
  {
    this.paises.obtener_paises().subscribe(
      {
        next: (p) => { 
          this.lista_paises = p;
        },
        error: (e) => { console.log(e) }
      });
  }
  
}
