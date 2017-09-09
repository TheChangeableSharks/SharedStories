import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../../auth/auth.service';
import { StoriesService } from './../stories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.css']
})
export class MyStoriesComponent implements OnInit, OnDestroy {
  public stories;
  private storiesSub: Subscription;

  constructor(private storiesService: StoriesService, private authService: AuthService) { }

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    this.storiesSub = this.storiesService
      .getByUserId(user.uid)
      .subscribe((stories) => this.stories = stories);
  }

  ngOnDestroy() {
    this.storiesSub.unsubscribe();
  }
}
