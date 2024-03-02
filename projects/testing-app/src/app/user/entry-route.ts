import { NavigationStart, Router } from "@angular/router";
import { take, tap } from "rxjs";
export class EntryRoute {
    private firstNavigation: NavigationStart | null = null;

    get path(): string {
        if(!this.firstNavigation || this.firstNavigation.url === "/unauthorized") {
            return "";
        }
        return this.firstNavigation.url;
    }

    constructor(private router: Router) { }

    captureEntryRoute(): void {
        this.router.events.pipe(
            take(1),
            tap(event => {
                if (event instanceof NavigationStart) {
                    this.firstNavigation = event;
                };
            })
        ).subscribe();
    }
}