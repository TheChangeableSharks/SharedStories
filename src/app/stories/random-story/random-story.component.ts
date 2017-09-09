import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { StoriesService } from './../stories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-random-story',
  template: '',
  styles: []
})
export class RandomStoryComponent implements OnInit, OnDestroy {
  private storiesSub: Subscription;

  constructor(
    private storiesService: StoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.storiesSub = this.storiesService
      .getAll()
      .subscribe((stories) => {
        const len = stories.length;
        const random = Math.floor(Math.random() * len);
        const story = stories[random];

        this.router.navigate(['/stories/details', story.$key]);
      });
  }

  ngOnDestroy() {
    this.storiesSub.unsubscribe();
  }
}
