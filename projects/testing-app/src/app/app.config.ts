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
      domain: "dev-3u1ixbtbepvslk88.us.auth0.com",
      clientId: "37rFp5Rpm87V66zjoqGkEIm1lAutrXfm",
      poolAssistantUri: "/api/v1",
      backOfficeUri: "/api/v1"
    }))
  ],
};
