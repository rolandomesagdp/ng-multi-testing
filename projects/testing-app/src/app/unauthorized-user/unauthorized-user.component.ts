import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ConfiguratorUser } from '../user/user';

@Component({
  selector: 'ngt-unauthorized-user',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './unauthorized-user.component.html',
  styleUrl: './unauthorized-user.component.scss'
})
export class UnauthorizedUserComponent {
  
  constructor(private user: ConfiguratorUser) {
  }

  login(): void {
    this.user.logIn();
  }
}
