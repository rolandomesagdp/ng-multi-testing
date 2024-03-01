import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { take, tap } from "rxjs";

@Injectable({ providedIn: "root"})
export class EntryRoute {
    private entryRouteEventPayload: NavigationStart | null = null;

    get path(): string {
        if(!this.entryRouteEventPayload || this.entryRouteEventPayload.url === "/unauthorized") {
            return "";
        }
        return this.entryRouteEventPayload.url;
    }

    constructor(private router: Router) {
        
    }

    subscribeToRouterEvents(): void {
        this.router.events.pipe(
            take(1),
            tap(event => {
                if (event instanceof NavigationStart) {
                    this.entryRouteEventPayload = event;
                };
            })
        ).subscribe();
    }
}