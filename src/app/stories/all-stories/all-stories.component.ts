import { StoriesService } from './../stories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.component.html',
  styleUrls: ['./all-stories.component.css']
})
export class AllStoriesComponent implements OnInit {
  private stories;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesService
      .getAll()
      .subscribe((stories) => this.stories = stories);
  }
}
