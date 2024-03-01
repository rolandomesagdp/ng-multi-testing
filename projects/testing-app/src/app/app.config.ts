import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter, Router } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfiguratorAuthModule } from './auth/auth.module';
import { EntryRoute } from './user/entry-route';

export function initializeApp(router: Router) {
  return () => null;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(),
    importProvidersFrom(ConfiguratorAuthModule.forRoot({
      domain: "dev-3u1ixbtbepvslk88.us.auth0.com",
      clientId: "37rFp5Rpm87V66zjoqGkEIm1lAutrXfm",
      poolAssistantUri: "/api/v1",
      backOfficeUri: "/api/v1"
    })),
    { 
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [EntryRoute]
    }
  ],
};
