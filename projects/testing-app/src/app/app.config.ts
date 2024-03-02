import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfiguratorAuthModule } from './auth/auth.module';
import { DIVISION_TOKEN } from './user/user-division.token';
import { environment } from '../environments/environment';
import { userInitializer } from './user/user-initializer';
import { ConfiguratorUser } from './user/user';

export const appConfig: ApplicationConfig = {
  providers: [
    { 
      provide: APP_INITIALIZER,
      useFactory: userInitializer,
      multi: true,
      deps: [ConfiguratorUser]
    },
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(),
    importProvidersFrom(ConfiguratorAuthModule.forRoot({
      domain: "dev-3u1ixbtbepvslk88.us.auth0.com",
      clientId: "37rFp5Rpm87V66zjoqGkEIm1lAutrXfm",
      poolAssistantUri: "/api/v1",
      backOfficeUri: "/api/v1"
    })),
    { provide: DIVISION_TOKEN, useValue: environment.division }
  ],
};
