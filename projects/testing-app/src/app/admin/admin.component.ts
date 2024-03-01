import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ConfiguratorUser } from '../user/user';

@Component({
  selector: 'ngt-admin',
  standalone: true,
  imports: [ MatButtonModule, CommonModule ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(private router: Router, public user: ConfiguratorUser) { }

  goToSelectable(): void {
    this.router.navigateByUrl("selectable-components");
  }
}
