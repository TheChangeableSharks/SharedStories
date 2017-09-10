import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) { }

  register(email: string, password: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.fireAuth.auth.signOut();
  }

  getCurrentUser() {
    return this.fireAuth.auth.currentUser;
  }

  getCurrentUserObservable() {
    return this.fireAuth.authState;
  }
}
