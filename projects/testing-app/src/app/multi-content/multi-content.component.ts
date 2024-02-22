import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { ContentRowComponent } from './content-row/content-row.component';

@Component({
  selector: 'ngt-multi-content',
  standalone: true,
  imports: [ ContainerComponent, ContentRowComponent ],
  templateUrl: './multi-content.component.html',
  styleUrl: './multi-content.component.scss'
})
export class MultiContentComponent {

}
