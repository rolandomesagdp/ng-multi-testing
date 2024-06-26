import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from "@angular/router";
import { take, tap } from "rxjs";
export class EntryRoute {
    private firstNavigation: NavigationStart | null = null;

    private languageCountryRegex: RegExp = new RegExp("^[A-Za-z]{2}_[A-Za-z]{2}");

    get language(): string {
        return this.getUrlLanguageSection();
    }
    
    get fullUrl(): string {
        return window.location.href;
    }

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
                    console.log(this.language);
                };
            })
        ).subscribe();
    }

    private getUrlLanguageSection(): string {
        const allPaths: string[] = this.fullUrl.split('/');

        const languageSection = allPaths.find((urlSection: string) => {
            return this.languageCountryRegex.test(urlSection);
        });
        return languageSection ? languageSection : "";
    }
}