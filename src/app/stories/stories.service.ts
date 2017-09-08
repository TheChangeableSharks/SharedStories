import { AuthService } from './../auth/auth.service';
import { Story } from './../models/story';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class StoriesService {
  private user: firebase.User;
  private collection: string;

  constructor(
    private Router: Router,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.user = this.authService.getCurrentUser();
    this.collection = '/stories';
  }

  getAll(): FirebaseListObservable<Story[]> {
    return this.db
      .list(this.collection, { query: { orderByKey: true } });
  }

  getByUserId(userId) {
    return this.db
      .list(this.collection, {
        query: { orderByChild: 'authorId', equalTo: userId }
      });
  }

  create(title: string, content: string, authorId: string) {
    return this.db
      .list(this.collection)
      .push({
        title,
        content,
        authorId
      });
  }

  getById(storyId): Observable<Story> {
    return this.db.object(`${this.collection}/${storyId}`);
  }
}
