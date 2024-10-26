import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimalesABMService } from '../../services/animales-abm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-animal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modificar-animal.component.html',
  styleUrl: './modificar-animal.component.css'
})
export class ModificarAnimalComponent {

  @Input() animal_seleccionado: any;
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['animal_seleccionado'] && this.animal_seleccionado) {
      this.form.patchValue(this.animal_seleccionado);
    }
  }

  modificar()
  {
    this.form.markAllAsTouched();
    this.animales.UpdateAnimal(this.form.value, this.animal_seleccionado.id);
    Swal.fire(
      {
        title: 'Éxito',
        text: 'Animal actualizado',
        icon: 'success',
        iconColor: '#FF00C1',
        confirmButtonText: "<p style='color:#000000'> Ok </p>",
        confirmButtonColor: '#00FFEB',
        background: '#FFFFFF'
      });
  }

}
