import { AuthService, User } from '@auth0/auth0-angular';
import { Observable, take, tap } from 'rxjs';
import { EntryRoute } from './entry-route';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DIVISION_TOKEN } from './user-division.token';

@Injectable({ providedIn: 'root' })
export class ConfiguratorUser {
  private _auth0User: User | null | undefined;

  get id(): string | undefined {
    return this._auth0User?.sub;
  }

  get email(): string | undefined {
    return this._auth0User?.email;
  }

  get name(): string | undefined {
    return this._auth0User?.name;
  }

  get nickname(): string | undefined {
    return this._auth0User?.nickname;
  }

  get picture(): string | undefined {
    return this._auth0User?.picture;
  }

  get division(): string {
    return this._division;
  }

  entryRoute: EntryRoute;

  get isAuthenticated$(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(take(1));
  }

  constructor(
    private authService: AuthService,
    @Inject(DIVISION_TOKEN) private _division: string,
    router: Router
  ) {
    this.entryRoute = new EntryRoute(router);
  }

  isAdmin(): boolean {
    return true;
  }

  isBackOfficeAdmin(): boolean {
    return true;
  }

  isSetup(): boolean {
    return this._auth0User !== undefined;
  }

  setup(): Observable<User | null | undefined> {
    return this.authService.user$.pipe(
      take(1),
      tap((user: User | null | undefined) => {
        this._auth0User = user;
      })
    );
  }

  logIn(): void {
    this.authService.loginWithRedirect({
      appState: { target: this.entryRoute.path },
      authorizationParams: {
        division: this.division
      }
    });
  }

  logout(): void {
    const logoutRedirection = document.location.origin;
    this.authService.logout({ logoutParams: { returnTo: logoutRedirection } });
  }
}