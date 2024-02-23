import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'ngt-admin',
  standalone: true,
  imports: [ MatButtonModule, CommonModule ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(private router: Router, public authService: AuthService) { }

  goToSelectable(): void {
    this.router.navigateByUrl("selectable-components");
  }

  currentUser$: Observable<User | null | undefined> = this.authService.user$.pipe(
    tap((user: User | null | undefined) => {
      console.log(user);
    })
  );
}
