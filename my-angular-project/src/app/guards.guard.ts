import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const guardsGuard: CanActivateFn = (route, state) => {
  
  return true;
};
