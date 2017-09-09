import { Subscription } from 'rxjs/Subscription';
import { StoriesModule } from './../stories.module';
import { StoriesService } from './../stories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit, OnDestroy {
  public stories;
  private storiesSub: Subscription;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesSub = this.storiesService
      .getTopStories()
      .subscribe((stories) => {
        this.stories = stories;
      });
  }

  ngOnDestroy() {
    this.storiesSub.unsubscribe();
  }
}
