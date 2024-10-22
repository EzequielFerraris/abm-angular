import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { collectionData, orderBy, query} from '@angular/fire/firestore';
import { VeterinariosServiceService } from '../../services/veterinarios-service.service';

@Component({
  selector: 'app-lista-veterinarios',
  standalone: true,
  imports: [],
  templateUrl: './lista-veterinarios.component.html',
  styleUrl: './lista-veterinarios.component.css'
})
export class ListaVeterinariosComponent {

  private sub!:Subscription;
  public lista_veterinarios:any[] = [];
  @Output() seleccion = new EventEmitter<object>();

  constructor(private veterinarios : VeterinariosServiceService)
  {}

  ngOnInit()
  {
    this.get_veterinarios();
  }
  
  elegir_veterinario(veterinario: object)
  {
    this.seleccion.emit(veterinario);
  }
  
  get_veterinarios()
  {
    let col = this.veterinarios.get_collection();

    const filtered = query(col,orderBy("nombre"));

    const observable = collectionData(filtered);
  
      this.sub = observable.subscribe((respuesta: any) => {

        this.lista_veterinarios = respuesta;

      });
  }
}
