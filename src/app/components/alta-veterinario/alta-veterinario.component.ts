import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VeterinariosServiceService } from '../../services/veterinarios-service.service';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-veterinario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TablaPaisesComponent],
  templateUrl: './alta-veterinario.component.html',
  styleUrl: './alta-veterinario.component.css'
})
export class AltaVeterinarioComponent {

  form!: FormGroup;
  public pais_elegido = "";

  constructor(private veterinarios : VeterinariosServiceService,
  ){}

  ngOnInit() 
  {
    this.form = new FormGroup({
      nombre: new FormControl("", [Validators.pattern('^[a-zA-Z\\s]+$'), Validators.required]),
      dni: new FormControl("", [Validators.pattern('^[0-9]{8}$'), Validators.required]),
      edad: new FormControl("", [Validators.min(21), Validators.max(65), Validators.required]),    
      matricula: new FormControl("", [Validators.pattern('^[0-9]{6}$'), Validators.required]),
      domicilio: new FormControl(false, Validators.required),
      pais: new FormControl("", [Validators.required]),
    });
  }

  enviar()
  {
    this.form.markAllAsTouched();
    this.veterinarios.agregar_veterinario(this.form.value);
    Swal.fire(
      {
        title: 'Éxito',
        text: 'Veterinario guardado',
        icon: 'success',
        iconColor: '#FF00C1',
        confirmButtonText: "<p style='color:#000000'> Ok </p>",
        confirmButtonColor: '#00FFEB',
        background: '#FFFFFF'
      });
  }

  elegir_pais( $event : string)
  {
    this.pais_elegido = $event;
    this.form.controls['pais'].setValue($event);
    
  }
}
