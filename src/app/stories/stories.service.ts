import { Story } from './../models/story';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class StoriesService {
  private user: Observable<firebase.User>;
  private collection: string;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private Router: Router
  ) {
    this.user = this.afAuth.authState;
    this.collection = '/stories';
  }

  getAll(): FirebaseListObservable<Story[]> {
    return this.db
      .list(this.collection, { query: { orderByKey: true } });
  }

  create(title: string, description: string) {
    return this.db
      .list(this.collection)
      .push({
        title,
        description,
      });
  }

  getById(storyId): Observable<Story> {
    return this.db.object(this.collection + storyId);
  }
}
