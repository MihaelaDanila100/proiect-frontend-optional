import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutePathsService } from '../services/route-paths.service';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {
  constructor(private routerPaths:RoutePathsService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!localStorage.getItem("user")){
        this.routerPaths.goBackHome();
        return false;
      }
    return true;
  }
  
}
