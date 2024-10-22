import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public input_mail: string = "";
  public input_pass: string = "";

  constructor(private auth : AuthService)
  {
  }
  //BOTON DE AUTOCOMPLETADO
  autocompletar(usuario : string)
  {
    if(usuario == 'admin')
    {
      this.input_mail = "admin@gmail.com";
      this.input_pass = "123qwe";
    }
    else
    {
      this.input_mail = "user@gmail.com";
      this.input_pass = "123qwe";
    }
    
  }

  //FUNCION LOGIN
  login()
  {
    this.auth.log_in(this.input_mail, this.input_pass);
  }

}
