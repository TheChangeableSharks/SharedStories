import { StoriesService } from './../stories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  private stories;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesService
      .getAll()
      .subscribe((stories) => this.stories = stories);
  }
}
