import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import Keycloak from "keycloak-js";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject the current `KeycloakService` and use it to get an authentication token.
  const keycloak = inject(Keycloak);

  const newReq = req.clone({
    headers: req.headers.append('Authorization', 'Bearer ' + keycloak.token),
  });

  return next(newReq);
};
