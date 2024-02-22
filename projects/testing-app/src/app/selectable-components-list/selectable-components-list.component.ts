import { Component } from '@angular/core';
import { SelectableItem } from './selectable-item/selectable-item';
import { SelectableItemComponent } from './selectable-item/selectable-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'selectable-components-list',
  standalone: true,
  imports: [ SelectableItemComponent, MatProgressBarModule ],
  templateUrl: './selectable-components-list.component.html',
  styleUrl: './selectable-components-list.component.scss'
})
export class SelectableComponentsComponent {
  selectableItems: SelectableItem<string>[] = [
    new SelectableItem<string>("one"), 
    new SelectableItem<string>("two"), 
    new SelectableItem<string>("three"), 
    new SelectableItem<string>("four"), 
    new SelectableItem<string>("five") 
  ]
}
