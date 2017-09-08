import { StoriesModule } from './../stories.module';
import { StoriesService } from './../stories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  private stories;
  constructor(private storiesService: StoriesService) { }


  ngOnInit() {
    this.storiesService
      .getTopStories()
      .subscribe((stories) => {
        this.stories = stories;
      });
  }

}
