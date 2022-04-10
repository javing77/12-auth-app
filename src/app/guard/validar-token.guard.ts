import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor() {}

  canActivate(): Observable<boolean> | boolean  {
    console.log('canActivate');
    return true;
  }
  canLoad(): Observable<boolean > | boolean  {
    console.log('canLoad');

    return true;
  }
}
