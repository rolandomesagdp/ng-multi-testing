import { Component, HostListener, Input } from '@angular/core';
import { SelectableItem } from './selectable-item';

@Component({
  selector: 'ngt-selectable-item',
  standalone: true,
  imports: [],
  templateUrl: './selectable-item.component.html',
  styleUrl: './selectable-item.component.scss'
})
export class SelectableItemComponent<T> {
  @Input() selectableItem: SelectableItem<T> | null = null;

  @HostListener('click', ['$event'])
  selectItem() {
    if(this.selectableItem) {
      this.selectableItem.selected = !this.selectableItem.selected;
    }
  }

  getClasses(): string[] {
    if(this.selectableItem?.selected) {
      return ["item", "item-selected"]
    }
    return ["item", "item-unselected"];
  }
}
