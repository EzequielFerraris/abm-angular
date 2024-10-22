import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimalesABMService } from '../../services/animales-abm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-animal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-animal.component.html',
  styleUrl: './alta-animal.component.css'
})
export class AltaAnimalComponent {

  form!: FormGroup;
  constructor(private animales : AnimalesABMService,
  ){}

  ngOnInit() 
  {
    this.form = new FormGroup({
      nombre: new FormControl("", [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
      tipo: new FormControl("", [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
      patas: new FormControl("", [Validators.min(0), Validators.required]),
      peso_promedio: new FormControl("", [Validators.min(-1), Validators.required]),
    });
  }

  enviar()
  {
    this.form.markAllAsTouched();
    this.animales.agregar_animal(this.form.value);
    Swal.fire(
      {
        title: 'Éxito',
        text: 'Animal guardado',
        icon: 'success',
        iconColor: '#FF00C1',
        confirmButtonText: "<p style='color:#000000'> Ok </p>",
        confirmButtonColor: '#00FFEB',
        background: '#FFFFFF'
      });
  }
}
