import { StoriesService } from './../stories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-story',
  templateUrl: './random-story.component.html',
  styleUrls: ['./random-story.component.css']
})
export class RandomStoryComponent implements OnInit {
  private stories;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesService
      .getAll()
      .subscribe((stories) => {
      const len = stories.length;
      const random = Math.floor(Math.random() * len);
      this.stories = [stories[random]];
      });
  }
}
