import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'ngt-selectable-item',
  standalone: true,
  imports: [],
  templateUrl: './selectable-item.component.html',
  styleUrl: './selectable-item.component.scss'
})
export class SelectableItemComponent {
  @Input() item: string = "";
  selected: boolean = false;

  @HostListener('click', ['$event'])
  selectItem() {
    this.selected = !this.selected;
  }

  getClasses(): string[] {
    if(this.selected) {
      return ["item", "item-selected"]
    }
    return ["item", "item-unselected"];
  }
}
