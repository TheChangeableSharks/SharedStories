import { AuthService } from './../auth/auth.service';
import { Story } from './../models/story';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
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
      .list(this.collection, { query: { orderByChild: 'dateAdded' } });
  }

  getByUserId(userId) {
    return this.db
      .list(this.collection, {
        query: { orderByChild: 'authorId', equalTo: userId }
      });
  }

  getTopStories() {
    return this.db
      .list(this.collection, {
        query: { orderByChild: 'reversedLikesCount', limitToFirst: 5 }
      });
  }

  create(title: string, content: string, authorId: string) {
    return this.db
      .list(this.collection)
      .push({
        title,
        content,
        authorId,
        reversedLikesCount: 0,
        dateAdded: 0 - Number(new Date()),
      });
  }

  like(storyId: string, userId: string, currentLikes) {
    const story = this.getById(storyId);

    return story.$ref.child('likes')
      .push(userId)
      .then(() => {
        const newReversedLikes = -(currentLikes + 1);
        story.$ref
          .child('reversedLikesCount')
          .set(newReversedLikes);
      });
  }

  unLike(storyId: string, userId: string, currentLikes) {
    // const story = this.getById(storyId);

    // return story.$ref.child('likes')
    //   .orderByKey()
    //   .equalTo(userId)
    //   .limitToFirst(1)
    //   .once('child_added', (snapshot) =>
    //     snapshot.ref.remove()
    //   );
  }

  addComment(storyId: string, content: string, authorId: string) {
    const story = this.getById(storyId);
    return story.$ref.child('comments').push({
      authorId: authorId,
      content: content,
      dateAdded: Number(new Date()),
    });
  }

  getById(storyId): FirebaseObjectObservable<Story> {
    return this.db.object(`${this.collection}/${storyId}`);
  }
}
