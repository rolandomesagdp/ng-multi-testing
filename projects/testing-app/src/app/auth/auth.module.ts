import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { importProvidersFrom, ModuleWithProviders, NgModule } from "@angular/core";
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AuthModuleOptions } from "./auth-module-options";
@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class ConfiguratorAuthModule {
  
  static forRoot(options: AuthModuleOptions): ModuleWithProviders<ConfiguratorAuthModule> {
    return {
      ngModule: ConfiguratorAuthModule,
      providers: [
        importProvidersFrom(AuthModule.forRoot({
          domain: options.domain,
          clientId: options.clientId,
          authorizationParams: {
            redirect_uri: window.location.origin,
            audience: options.audience
          },
          httpInterceptor: {
            allowedList: [ 
              `${options.poolAssistantUri}/*`,
              `${options.backOfficeUri}/*`
            ]
          }
        })),
        { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
      ]
    };
  }
}