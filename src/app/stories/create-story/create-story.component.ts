import { StoriesService } from './../stories.service';
import { AuthService } from './../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent {
  constructor(private authService: AuthService, private storiesService: StoriesService) { }

  create(form: NgForm) {
    const title = form.value.title;
    const content = form.value.content;
    const authorId = this.authService.getCurrentUser().uid;

    this.storiesService.create(title, content, authorId);
  }
}
