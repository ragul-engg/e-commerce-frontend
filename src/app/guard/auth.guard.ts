import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Subject, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export function authGuard(): CanActivateFn {
  return () => {
    const subject = new Subject<boolean>();
    const router = inject(Router);

    inject(AuthService)
      .isLoggedIn()
      .subscribe((res) => {
        if (!res.valid) {
          router.navigate(['home']);
        }
        subject.next(res.valid);
      });
    console.log(subject.asObservable());
    return subject.asObservable();
  };
}

function handleInvalidToken(error: HttpErrorResponse) {
  return throwError(() => {
    new Error('Invalid token');
  });
}
