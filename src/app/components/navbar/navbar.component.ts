import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars as fasBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CommonModule, NgClass } from '@angular/common';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, NgClass, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  estadoMenu: boolean = false;

  constructor(public library: FaIconLibrary,
              public auth: AuthService
  )
  {
    library.addIcons(fasBars);
  }

mostrarMenu()
{
  this.estadoMenu = !this.estadoMenu;
}

logout()
{
  this.auth.log_out();
}

}
