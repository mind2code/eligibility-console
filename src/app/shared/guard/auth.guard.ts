import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthGuardData, createAuthGuard} from "keycloak-angular";
import {inject} from "@angular/core";
import Keycloak from 'keycloak-js';

const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {

  const { authenticated, grantedRoles } = authData;

  console.log(grantedRoles);
  const requiredRole = route.data['role'];
  console.log(requiredRole);
  if (!requiredRole) {
    return false;
  }

  const hasRequiredRole = (role: string): boolean =>
    Object.values(grantedRoles.resourceRoles).some((roles) => roles.includes(role));

  if (authenticated && hasRequiredRole(requiredRole) ) {
    return true;
  }

  if(!authenticated) {
    const keycloak = inject(Keycloak);
    await keycloak.login();
  }

  const router = inject(Router);
  return router.parseUrl('/forbidden');
};

export const canActivateAuthRole = createAuthGuard<CanActivateFn>(isAccessAllowed);

