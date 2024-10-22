import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AltaVeterinarioComponent } from './components/alta-veterinario/alta-veterinario.component';
import { loggedGuard } from './guards/logged.guard';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: 'home', component:  HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'AltaVeterinario', 
        component: AltaVeterinarioComponent,
        data: {midata: "datos de ruta"},
        canActivate: [loggedGuard]
      }
];
