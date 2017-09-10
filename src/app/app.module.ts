import { StoriesModule } from './stories/stories.module';
import { AuthModule } from './auth/auth.module';
import { LoggedOutGuard } from './auth/guards/logged-out.guard';
import { LoggedInGuard } from './auth/guards/logged-in.guard';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebase, 'SharedStories'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    AppRoutingModule,
    StoriesModule,
    AuthModule,
  ],
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
