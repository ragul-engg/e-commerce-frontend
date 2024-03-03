import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export function authGuard(): CanActivateFn {
  return () => {
    if (inject(AuthService).isLoggedIn()) {
      return true;
    }
    inject(Router).navigate(['home']);
    return false;
  };
}
