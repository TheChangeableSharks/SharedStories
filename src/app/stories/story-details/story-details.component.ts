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
    if (this.authService.getCurrentUser()) {
      const userId = this.authService.getCurrentUser().uid;
      const storyId = this.story.$key;
      const currentLikes = this.story.likesCount;

      if (!this.story.likedByViewer) {
        this.storiesService.like(storyId, userId, currentLikes);
        this.story.likedByViewer = true;
      } else {
        this.storiesService.unLike(storyId, userId, currentLikes);
        this.story.likedByViewer = false;
      }
    }
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
            const viewer = this.authService.getCurrentUser();
            if (viewer) {
              this.story = new Story(story, viewer.uid);
            } else {
              this.story = new Story(story);
            }
          });
      });
  }

  ngOnDestroy() {
    this.storiesSub.unsubscribe();
    this.paramsSub.unsubscribe();
  }
}
