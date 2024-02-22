import { Injectable } from "@angular/core";
import { AuthService, User } from "@auth0/auth0-angular";
import { map, Observable, } from "rxjs";
import { MyUser } from "./user.interface";

@Injectable({
    providedIn: "root"
})
export class UserService {

    currentUser$: Observable<MyUser | null> = this.authService.user$.pipe(
        map((user: User | null | undefined) => {
            return this.buildUser(user);
        })
    )

    constructor(public authService: AuthService) { }

    private buildUser(user: User | null | undefined): MyUser | null {
        if (user) {
            return {
                email: user.email,
                email_verified: user.email_verified,
                name: user.name,
                nickname: user.nickname,
                picture: user.picture,
                sub: user.sub,
                updated_at: user.updated_at
            }
        }
        return null;
    }
}