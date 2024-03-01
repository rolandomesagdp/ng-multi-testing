import { Injectable } from "@angular/core";
import { AuthService, User } from "@auth0/auth0-angular";
import { Observable, take, tap } from "rxjs";
import { EntryRoute } from "./entry-route";
import { environment } from '../../environments/environment'
import { UserRole } from "./user-roles";

@Injectable({ providedIn: "root" })
export class ConfiguratorUser {
    private _auth0User: User | null | undefined;
    
    get id(): string | undefined { return this._auth0User?.sub };

    get email(): string | undefined { return this._auth0User?.email }

    get name(): string | undefined { return this._auth0User?.name };

    get nickname(): string | undefined { return this._auth0User?.nickname };

    get picture(): string | undefined { return this._auth0User?.picture };
    
    get roles(): UserRole[] | undefined { return this.getUserRoles() };

    get countryCode(): string | undefined { return "ES" };
    
    get division(): string { return environment.division }

    get isAuthenticated$(): Observable<boolean> {
        return this.authService.isAuthenticated$;
    }

    constructor(private authService: AuthService, public entryRoute: EntryRoute) {
        this.setUser()
    }

    isAdmin(): boolean {
        const adminRole = this.roles?.find(x => x === "admin");
        return adminRole !== undefined;
    }

    isBackOfficeAdmin(): boolean {
        const adminRole = this.roles?.find(x => x === "backofficeadmin");
        return adminRole !== undefined;
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

    private getUserRoles(): UserRole[] | undefined {
        return [ "admin", "backofficeadmin", "default" ]
    }

    private setUser() {
        this.authService.user$.pipe(
            take(1),
            tap((user: User | null | undefined) => {
                    this._auth0User = user;
            })).subscribe();
    }
}