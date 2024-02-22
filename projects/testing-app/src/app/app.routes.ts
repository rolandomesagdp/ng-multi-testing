import { Routes } from '@angular/router';
import { MultiContentComponent } from './multi-content/multi-content.component';
import { SelectableComponentsComponent } from './selectable-components-list/selectable-components-list.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'selectable-components' },
    { path: 'selectable-components', component: SelectableComponentsComponent },
    { path: 'multi-content', component: MultiContentComponent }
];
