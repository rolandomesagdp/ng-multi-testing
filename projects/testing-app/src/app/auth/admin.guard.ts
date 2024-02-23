import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService, User } from "@auth0/auth0-angular";
import { map, Observable, of, take, tap } from "rxjs";

export const canActivateAdmin: CanActivateFn = 
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    return authService.user$.pipe(
      take(1),
      map((user: User | null | undefined) => {
        if(user && user["rol"] === "admin") {
          console.log(user);
          return true;
        }
        router.navigateByUrl('selectable-components');
        return false;
      })
    )
  };