import { LoggedOutGuard } from './guards/logged-out.guard';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ],
  providers: [AngularFireAuth, AuthService, LoggedOutGuard],
})
export class AuthModule { }
