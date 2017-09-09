import { Story } from './../../models/story';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  @Input()
  public stories: Story[];

  constructor() { }
}
