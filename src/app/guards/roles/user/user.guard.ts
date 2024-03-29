import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

export const userGuard: CanActivateFn = async(route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if(await authService.isAuth('authuser')){
    return true
  }else{
    const url = router.navigate(['/inicio/ingreso/user']);
    return url;
  }
};
