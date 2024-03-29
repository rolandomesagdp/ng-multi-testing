import { Component } from '@angular/core';
import { SelectableItem } from './selectable-item/selectable-item';
import { SelectableItemComponent } from './selectable-item/selectable-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { ConfiguratorUser } from '../user/user';

@Component({
  selector: 'selectable-components-list',
  standalone: true,
  imports: [ SelectableItemComponent, MatProgressBarModule, MatButtonModule, CommonModule ],
  templateUrl: './selectable-components-list.component.html',
  styleUrl: './selectable-components-list.component.scss'
})
export class SelectableComponentsList {
  selectableItems: SelectableItem<string>[] = [
    new SelectableItem<string>("one"), 
    new SelectableItem<string>("two"), 
    new SelectableItem<string>("three"), 
    new SelectableItem<string>("four"), 
    new SelectableItem<string>("five") 
  ];

  userLoggedIn$: Observable<boolean> = this.currentUser.isAuthenticated$;

  constructor(private router: Router, public currentUser: ConfiguratorUser) { }

  logout(): void {
    this.currentUser.logout();
  }

  navigateToMultiContent(): void {
    this.router.navigateByUrl("multi-content");
  }
}
