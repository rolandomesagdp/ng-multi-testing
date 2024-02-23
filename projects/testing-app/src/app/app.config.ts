import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfiguratorAuthModule } from './auth/auth.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(),
    importProvidersFrom(ConfiguratorAuthModule.forRoot({
      domain: "fluidra-dev.eu.auth0.com",
      clientId: "jP66swf0gj6R6lKvYY7ROILgoLPpw4s4",
      poolAssistantUri: "/api/v1",
      backOfficeUri: "/api/v1"
    }))
  ],
};
