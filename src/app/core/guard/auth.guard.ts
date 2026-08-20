import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthGuardData, createAuthGuard } from 'keycloak-angular';
import Keycloak from 'keycloak-js';

const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const { authenticated, grantedRoles } = authData;

  const configuredRoles = route.data['roles'] ?? route.data['role'];
  if (!configuredRoles) {
    return false;
  }
  const requiredRoles: string[] = Array.isArray(configuredRoles)
    ? configuredRoles
    : [configuredRoles];

  const hasRequiredRole = (role: string): boolean =>
    Object.values(grantedRoles.resourceRoles).some((roles) => roles.includes(role));

  if (authenticated && requiredRoles.some(hasRequiredRole)) {
    return true;
  }

  if(!authenticated) {
    const keycloak = inject(Keycloak)
    await keycloak.login();
  }

  const router = inject(Router);
  return router.parseUrl('/forbidden');
};

export const canActivateAuthRole = createAuthGuard<CanActivateFn>(isAccessAllowed);