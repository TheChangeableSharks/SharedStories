import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesService } from './stories.service';

@NgModule({
  imports: [
    CommonModule,
    StoriesRoutingModule,
  ],
  providers: [StoriesService],
  declarations: [AllComponent]
})
export class StoriesModule { }
