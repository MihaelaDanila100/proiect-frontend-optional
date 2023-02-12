import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutePathsService } from '../services/route-paths.service';
@Injectable({
  providedIn: 'root'
})
export class SpitalGuard implements CanActivate {
  constructor(private routePaths:RoutePathsService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(! (localStorage.getItem("tip_cont") == JSON.stringify("spital"))){
        this.routePaths.goBackHome();
        return false;
      }
    return true;
  }
  
}
