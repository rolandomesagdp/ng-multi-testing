import { Component } from '@angular/core';
import { SelectableItemComponent } from './selectable-item/selectable-item.component';

@Component({
  selector: 'selectable-components-list',
  standalone: true,
  imports: [ SelectableItemComponent ],
  templateUrl: './selectable-components-list.component.html',
  styleUrl: './selectable-components-list.component.scss'
})
export class SelectableComponentsComponent {
  items: string[] = ["one", "two", "three", "four", "five"]
}
