import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedOutGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve) => {
      const sub = this.authService
        .getCurrentUserObservable()
        .subscribe((user) => {
          sub.unsubscribe();
          if (user) {
            this.router.navigate(['/']);
            resolve(false);
          } else {
            resolve(true);
          }
        });
    });
  }
}
