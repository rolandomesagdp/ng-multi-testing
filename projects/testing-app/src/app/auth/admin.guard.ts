import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { ConfiguratorUser } from "../user/user";

export const canActivateAdmin: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    const currentUser: ConfiguratorUser = inject(ConfiguratorUser);
    const router: Router = inject(Router);

    if (!currentUser.isAdmin())
      router.navigateByUrl('selectable-components');
    return currentUser.isAdmin()
};