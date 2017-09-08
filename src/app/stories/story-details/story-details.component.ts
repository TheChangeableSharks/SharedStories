import { Story } from './../../models/story';
import { StoriesService } from './../stories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class StoryDetailsComponent implements OnInit {
  private story: Story;

  constructor(private storiesService: StoriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id = params['id'];
        this.storiesService
          .getById(id)
          .subscribe((story) => this.story = story);
      });
  }
}
