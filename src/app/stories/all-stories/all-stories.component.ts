import { Subscription } from 'rxjs/Subscription';
import { Story } from './../../models/story';
import { StoriesService } from './../stories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.component.html',
  styleUrls: ['./all-stories.component.css']
})
export class AllStoriesComponent implements OnInit, OnDestroy {
  public stories: Story[];
  private storiesSub: Subscription;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesSub = this.storiesService
      .getAll()
      .subscribe((stories) => this.stories = stories);
  }

  ngOnDestroy() {
    this.storiesSub.unsubscribe();
  }
}
