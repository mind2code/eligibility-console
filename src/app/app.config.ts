import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AutoRefreshTokenService, createInterceptorCondition, INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG, IncludeBearerTokenCondition, includeBearerTokenInterceptor, provideKeycloak, UserActivityService, withAutoRefreshToken } from 'keycloak-angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { provideNgxMask } from 'ngx-mask';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { authInterceptor } from './core/guard/auth.interceptor';
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import { provideToastr } from 'ngx-toastr';
import { provideSweetAlert2 } from "@sweetalert2/ngx-sweetalert2";

const urlCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/localhost:8700)(\/.*)?$/i,
  bearerPrefix: 'Bearer'
});

export const provideKeycloakAngular = () =>
  provideKeycloak({
    config: {
      url: environment.keycloak.host,
      realm: environment.keycloak.realm,
      clientId: environment.keycloak.clientId,
    },
    initOptions: {
      onLoad: 'login-required',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    },
    features: [
      withAutoRefreshToken({
        onInactivityTimeout: 'logout',
        sessionTimeout: 60000
      })
    ],
    providers: [AutoRefreshTokenService, UserActivityService]
  });

registerLocaleData(localeFR);
export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloakAngular(),
    {
      provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
      useValue: [urlCondition] // <-- Note that multiple conditions might be added.
    },
    BsDatepickerModule.forRoot().providers!,
    provideAnimations(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
    provideNgxMask(),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideToastr(),
    provideSweetAlert2({
      // Optional configuration
      fireOnInit: false,
      dismissOnDestroy: true,
    }),
  ],

};
