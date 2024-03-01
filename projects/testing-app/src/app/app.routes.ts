import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { canActivateAdmin } from './auth/admin.guard';
import { canActivateUser } from './auth/can-activate-user.guard';
import { MultiContentComponent } from './multi-content/multi-content.component';
import { SelectableComponentsList } from './selectable-components-list/selectable-components-list.component';
import { UnauthorizedUserComponent } from './unauthorized-user/unauthorized-user.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'selectable-components' },
    { path: 'selectable-components', component: SelectableComponentsList, canActivate: [canActivateUser] },
    { path: 'multi-content', component: MultiContentComponent, canActivate: [canActivateUser] },
    { path: 'admin', component: AdminComponent, canActivate: [canActivateAdmin ] },
    { path: 'unauthorized', component: UnauthorizedUserComponent }
];
