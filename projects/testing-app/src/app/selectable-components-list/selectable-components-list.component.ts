import { Component } from '@angular/core';
import { SelectableItetm } from './selectable-item/selectable-item';
import { SelectableItemComponent } from './selectable-item/selectable-item.component';

@Component({
  selector: 'selectable-components-list',
  standalone: true,
  imports: [ SelectableItemComponent ],
  templateUrl: './selectable-components-list.component.html',
  styleUrl: './selectable-components-list.component.scss'
})
export class SelectableComponentsComponent {
  selectableItems: SelectableItetm<string>[] = [
    new SelectableItetm<string>("one"), 
    new SelectableItetm<string>("two"), 
    new SelectableItetm<string>("three"), 
    new SelectableItetm<string>("four"), 
    new SelectableItetm<string>("five") 
  ]
}
