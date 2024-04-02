import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { ConfiguratorUser } from '../user/user';
export const canActivateUser: CanActivateFn = (): Observable<boolean> => {
  const router: Router = inject(Router);
  const currentUser: ConfiguratorUser = inject(ConfiguratorUser);
  
  if (currentUser.isSetup()) {
    return currentUser.isAuthenticated$.pipe(
      tap((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          router.navigateByUrl('unauthorized');
        }
      })
    );
  }
  return currentUser.setup().pipe(
    switchMap(() => currentUser.isAuthenticated$),
    tap((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        router.navigateByUrl('unauthorized');
      }
    })
  );
};