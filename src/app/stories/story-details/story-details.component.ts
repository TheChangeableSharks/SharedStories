import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../../auth/auth.service';
import { Story } from './../../models/story';
import { StoriesService } from './../stories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class StoryDetailsComponent implements OnInit, OnDestroy {
  private paramsSub: Subscription;
  private storiesSub: Subscription;
  private story: Story;

  constructor(
    private route: ActivatedRoute,
    private storiesService: StoriesService,
    private authService: AuthService
  ) { }

  like() {
    this.storiesService
      .updateLikes(this.story.$key, this.story.likes + 1);
  }

  comment(e: KeyboardEvent, textarea: HTMLTextAreaElement) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!textarea.value) {
        alert('Comment is empty');
      } else {
        const authorId = this.authService.getCurrentUser().uid;
        this.storiesService
          .addComment(this.story.$key, textarea.value, authorId);
        textarea.value = '';
      }
    }
  }

  ngOnInit() {
    this.paramsSub = this.route.params
      .subscribe(params => {
        const id = params['id'];

        this.storiesSub = this.storiesService
          .getById(id)
          .subscribe((story) => {
            story.dateAdded = new Date(story.dateAdded * -1);
            if (story.comments) {
              story.comments = Object.values(story.comments);
            }
            this.story = story;
          });
      });
  }

  ngOnDestroy() {
    this.storiesSub.unsubscribe();
    this.paramsSub.unsubscribe();
  }
}
