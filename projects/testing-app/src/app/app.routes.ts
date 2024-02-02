import { Routes } from '@angular/router';
import { SelectableComponentsComponent } from './selectable-components-list/selectable-components-list.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'selectable-components' },
    { path: 'selectable-components', component: SelectableComponentsComponent }
];
