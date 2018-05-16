import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { UsuarioService } from "./usuario.service";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private serv: UsuarioService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.serv.isLoggedIn) {
      this.router.navigate(['login']);
    }
    return this.serv.isLoggedIn;
  }
}
