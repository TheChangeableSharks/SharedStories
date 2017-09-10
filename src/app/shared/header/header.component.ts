import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) { }

  collapsed: boolean;

  ngOnInit() {
    this.collapsed = true;
  }

  getCurrentUser() {
    return this.authService.getCurrentUser();
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
