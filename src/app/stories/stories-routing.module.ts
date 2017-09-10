import { LoggedInGuard } from './../auth/guards/logged-in.guard';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { RandomStoryComponent } from './random-story/random-story.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { MyStoriesComponent } from './my-stories/my-stories.component';
import { AllStoriesComponent } from './all-stories/all-stories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'all' },
  { path: 'all', component: AllStoriesComponent },
  { path: 'random', component: RandomStoryComponent },
  { path: 'details/:id', component: StoryDetailsComponent },
  { path: 'create', component: CreateStoryComponent, canActivate: [LoggedInGuard] },
  { path: 'my', component: MyStoriesComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
