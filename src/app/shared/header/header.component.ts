import { AuthService } from './../../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService) { }

  getCurrentUser() {
    return this.authService.getCurrentUser();
  }
  onEdit() {
    window.scrollTo(0, 0);
  }
}
