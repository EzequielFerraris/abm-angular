import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { loggedGuard } from './guards/logged.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: 'home', component:  HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'AltaVeterinario', 
    loadComponent: () => import('./components/alta-veterinario/alta-veterinario.component')
    .then(b => b.AltaVeterinarioComponent),
        data: {midata: "datos de ruta"},
        canActivate: [loggedGuard]
    },
    { path: 'veterinarios', 
        loadComponent: () => import('./components/veterinarios/veterinarios.component')
        .then(b => b.VeterinariosComponent),
        canActivate: [loggedGuard]
    },
    { path: 'animales', 
        loadComponent: () => import('./components/animales/animales.component')
        .then(b => b.AnimalesComponent),
        canActivate: [adminGuard]
      },
];
