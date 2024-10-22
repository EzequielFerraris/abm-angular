import { Component, EventEmitter, Output } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent {

  public lista_paises! : any[]; 

  @Output() seleccion = new EventEmitter<string>();

  constructor(private paises : PaisesService)
  {}

  ngOnInit()
  {
    this.paises.obtener_paises().subscribe(
      {
        next: (p) => { 
          this.lista_paises = p;
          console.log(this.lista_paises);
        },
        error: (e) => { console.log(e) }
      });
  }
  
  elegir_pais(pais : string)
  {

    this.seleccion.emit(pais);
    console.log(this.lista_paises);
  }
  
  

}
