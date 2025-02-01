import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const _auth = inject(AuthService);
  const _router = inject(Router);
    if(_auth.isAuthorized()) {
      if (_auth.decodeToken().userType === 'admin') {
        return true;
      }
      else {
        return false
      }
    }
    else {
      _router.navigate(['/login']);
      return false;
    }
};
