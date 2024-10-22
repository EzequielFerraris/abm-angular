import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from "@angular/core";

export const adminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router);

  if (auth.is_admin()) {
    console.log('Puede pasar');
    return true;
  }

  console.log('No puede pasar.');
  router.navigateByUrl('');
  return false;
};
