import { ToastrService } from './../../services/toastr/toastr.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private toastr: ToastrService,
    private AuthService: AuthService,
    private router: Router
  ) { }

  register(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.AuthService
      .register(email, password)
      .then(() => this.router.navigate(['/']))
      .catch((error: any) => {
        const errorMessage = error.message;
        this.toastr.showError(errorMessage);
      });
  }
}
