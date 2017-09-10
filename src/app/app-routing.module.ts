import { LoggedOutGuard } from './auth/guards/logged-out.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'stories' },
  { path: 'stories', loadChildren: './stories/stories.module#StoriesModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
