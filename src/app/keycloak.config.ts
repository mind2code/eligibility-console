import {
  provideKeycloak,
  createInterceptorCondition,
  IncludeBearerTokenCondition,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  withAutoRefreshToken,
  AutoRefreshTokenService,
  UserActivityService
} from 'keycloak-angular';
import { environment } from '../environments/environment';


const appUrl = environment.appUrl; // ex: 'http://localhost:4200'

// Échapper les caractères spéciaux pour éviter les problèmes dans le regex
const escapedAppUrl = appUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Construire le regex
const regex = new RegExp(`^(${escapedAppUrl})(\\/.*)?$`, 'i');

const localhostCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  //urlPattern: /^(http:\/\/localhost:4200)(\/.*)?$/i
  urlPattern: regex
});

export const provideKeycloakAngular = () =>
  provideKeycloak({
    config: {
      realm: environment.keycloak.realm,
      url: environment.keycloak.host,
      clientId: environment.keycloak.clientId
    },
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      redirectUri: window.location.origin + '/'
    },
    features: [
      withAutoRefreshToken({
        onInactivityTimeout: 'logout',
        sessionTimeout: 60000
      })
    ],
    providers: [
      AutoRefreshTokenService,
      UserActivityService,
      {
        provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
        useValue: [localhostCondition] as IncludeBearerTokenCondition[],

      }
    ]
  });
