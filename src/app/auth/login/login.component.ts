import { ToastrService } from './../../services/toastr/toastr.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) { }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService
      .login(email, password)
      .then(() => this.router.navigate(['/']))
      .catch((error: any) => {
        const errorMessage = error.message;
        this.toastr.showError(errorMessage);
      });
  }
}
