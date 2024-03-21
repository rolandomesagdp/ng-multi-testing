import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ConfiguratorUser } from "../user/user";

export const canActivateBackOfficeAdmin: CanActivateFn = (): boolean => {
    const currentUser: ConfiguratorUser = inject(ConfiguratorUser);
    const router: Router = inject(Router);

    if (!currentUser.isBackOfficeAdmin())
      router.navigateByUrl('selectable-components');
    return currentUser.isBackOfficeAdmin();
};