import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesService } from './stories.service';
import { AllStoriesComponent } from './all-stories/all-stories.component';
import { MyStoriesComponent } from './my-stories/my-stories.component';
import { StoryComponent } from './story/story.component';
import { CreateStoryComponent } from './create-story/create-story.component';

@NgModule({
  imports: [
    CommonModule,
    StoriesRoutingModule,
    FormsModule
  ],
  providers: [StoriesService],
  declarations: [AllStoriesComponent, MyStoriesComponent, StoryComponent, CreateStoryComponent]
})
export class StoriesModule { }
