import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngt-content-row',
  standalone: true,
  imports: [],
  templateUrl: './content-row.component.html',
  styleUrl: './content-row.component.scss'
})
export class ContentRowComponent {
  @Input() title: string = "";
}
