import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { ConfiguratorUser } from "../user/user";

export const canActivateUser: CanActivateFn = (): Observable<boolean> => {
    const router: Router = inject(Router);
    const currentUser: ConfiguratorUser = inject(ConfiguratorUser);

    return currentUser.isAuthenticated$.pipe(
      tap((isAuthenticated: boolean) => {
        if(!isAuthenticated) {
            router.navigateByUrl('unauthorized');
        }
      })
    )
  };