import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ContentRowComponent } from './content-row/content-row.component';

@Component({
  selector: 'ngt-multi-content',
  standalone: true,
  imports: [ ContainerComponent, ContentRowComponent, MatButtonModule, CommonModule ],
  templateUrl: './multi-content.component.html',
  styleUrl: './multi-content.component.scss'
})
export class MultiContentComponent {

  constructor(private router: Router) { }
  
  navigateToAdmin(): void {
    this.router.navigateByUrl("admin");
  }
}
